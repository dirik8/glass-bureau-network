import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Database, Trash2, Download, AlertTriangle } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

type TableName = 'form_submissions' | 'cases' | 'content_blocks' | 'pdfs' | 'seo_analytics' | 'domains' | 'smtp_configs';

export function DatabaseManager() {
  const [isPurging, setIsPurging] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [showPurgeDialog, setShowPurgeDialog] = useState(false);
  const [purgeType, setPurgeType] = useState<string>('');
  const { toast } = useToast();

  const exportData = async (table: TableName) => {
    setIsExporting(true);
    try {
      const { data, error } = await supabase
        .from(table)
        .select('*');

      if (error) throw error;

      const jsonData = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${table}_export_${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: 'Export Complete',
        description: `${table} data has been exported successfully`,
      });
    } catch (error) {
      toast({
        title: 'Export Failed',
        description: `Failed to export ${table} data`,
        variant: 'destructive'
      });
    } finally {
      setIsExporting(false);
    }
  };

  const purgeData = async (table: string) => {
    setIsPurging(true);
    try {
      if (table === 'all') {
        const tables: TableName[] = ['form_submissions', 'cases', 'content_blocks', 'seo_analytics', 'domains', 'smtp_configs'];
        for (const tableName of tables) {
          const { error } = await supabase
            .from(tableName)
            .delete()
            .neq('id', '00000000-0000-0000-0000-000000000000');
          
          if (error) throw error;
        }
      } else {
        const { error } = await supabase
          .from(table as TableName)
          .delete()
          .neq('id', '00000000-0000-0000-0000-000000000000');

        if (error) throw error;
      }

      toast({
        title: 'Data Purged',
        description: `All ${table === 'all' ? 'database' : table} data has been permanently deleted`,
      });
    } catch (error) {
      toast({
        title: 'Purge Failed',
        description: `Failed to purge ${table} data`,
        variant: 'destructive'
      });
    } finally {
      setIsPurging(false);
      setShowPurgeDialog(false);
    }
  };

  const handlePurgeClick = (table: string) => {
    setPurgeType(table);
    setShowPurgeDialog(true);
  };

  const dataCategories = [
    {
      name: 'Form Submissions',
      table: 'form_submissions' as TableName,
      description: 'All contact forms and case submissions',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      name: 'PDF Documents',
      table: 'pdfs' as TableName,
      description: 'Uploaded PDF files and metadata',
      color: 'bg-green-100 text-green-800'
    },
    {
      name: 'Case Records',
      table: 'cases' as TableName,
      description: 'Case tracking and progress data',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      name: 'Analytics Data',
      table: 'seo_analytics' as TableName,
      description: 'SEO and performance analytics',
      color: 'bg-orange-100 text-orange-800'
    },
    {
      name: 'Content Blocks',
      table: 'content_blocks' as TableName,
      description: 'Dynamic content and page blocks',
      color: 'bg-gray-100 text-gray-800'
    },
    {
      name: 'Domains',
      table: 'domains' as TableName,
      description: 'Configured domain settings',
      color: 'bg-teal-100 text-teal-800'
    },
    {
      name: 'SMTP Configs',
      table: 'smtp_configs' as TableName,
      description: 'Email server configurations',
      color: 'bg-indigo-100 text-indigo-800'
    }
  ];

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Database Management
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <span className="font-medium text-yellow-800">Important Notice</span>
            </div>
            <p className="text-sm text-yellow-700">
              Database purging permanently deletes data. Always export data before purging.
              This action cannot be undone.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Data Categories</h3>
            {dataCategories.map((category) => (
              <div key={category.table} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{category.name}</h4>
                    <Badge className={category.color}>
                      {category.table}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => exportData(category.table)}
                    disabled={isExporting}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-600 hover:text-red-700"
                    onClick={() => handlePurgeClick(category.table)}
                    disabled={isPurging}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Purge
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-red-600">Complete Database Reset</h3>
                <p className="text-sm text-muted-foreground">
                  Purge all data from all tables (except admin users and settings)
                </p>
              </div>
              <Button
                variant="destructive"
                onClick={() => handlePurgeClick('all')}
                disabled={isPurging}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Reset All Data
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <AlertDialog open={showPurgeDialog} onOpenChange={setShowPurgeDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Data Purge</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete all data from{' '}
              <strong>{purgeType === 'all' ? 'ALL TABLES' : purgeType}</strong>.
              This action cannot be undone. Are you sure you want to continue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => purgeData(purgeType)}
              className="bg-red-600 hover:bg-red-700"
            >
              Yes, Purge Data
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}