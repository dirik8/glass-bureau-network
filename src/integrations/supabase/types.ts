export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string | null
          id: string
          password_hash: string
          role: string | null
          user_id: string | null
          username: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          password_hash: string
          role?: string | null
          user_id?: string | null
          username: string
        }
        Update: {
          created_at?: string | null
          id?: string
          password_hash?: string
          role?: string | null
          user_id?: string | null
          username?: string
        }
        Relationships: []
      }
      cases: {
        Row: {
          case_number: string
          case_type: string
          created_at: string
          id: string
          notes: string | null
          progress_stages: Json | null
          status: string
          updated_at: string
          user_details: Json
        }
        Insert: {
          case_number: string
          case_type: string
          created_at?: string
          id?: string
          notes?: string | null
          progress_stages?: Json | null
          status?: string
          updated_at?: string
          user_details: Json
        }
        Update: {
          case_number?: string
          case_type?: string
          created_at?: string
          id?: string
          notes?: string | null
          progress_stages?: Json | null
          status?: string
          updated_at?: string
          user_details?: Json
        }
        Relationships: []
      }
      content_blocks: {
        Row: {
          block_key: string
          block_type: string
          content: string | null
          created_at: string
          display_order: number | null
          id: string
          image_url: string | null
          is_active: boolean | null
          link_text: string | null
          link_url: string | null
          metadata: Json | null
          page_path: string | null
          subtitle: string | null
          title: string | null
          updated_at: string
        }
        Insert: {
          block_key: string
          block_type: string
          content?: string | null
          created_at?: string
          display_order?: number | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          link_text?: string | null
          link_url?: string | null
          metadata?: Json | null
          page_path?: string | null
          subtitle?: string | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          block_key?: string
          block_type?: string
          content?: string | null
          created_at?: string
          display_order?: number | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          link_text?: string | null
          link_url?: string | null
          metadata?: Json | null
          page_path?: string | null
          subtitle?: string | null
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      domains: {
        Row: {
          created_at: string
          domain_name: string
          id: string
          is_active: boolean
          is_primary: boolean
          updated_at: string
        }
        Insert: {
          created_at?: string
          domain_name: string
          id?: string
          is_active?: boolean
          is_primary?: boolean
          updated_at?: string
        }
        Update: {
          created_at?: string
          domain_name?: string
          id?: string
          is_active?: boolean
          is_primary?: boolean
          updated_at?: string
        }
        Relationships: []
      }
      form_submissions: {
        Row: {
          data: Json
          email_error: string | null
          email_sent: boolean | null
          email_sent_at: string | null
          form_type: string
          id: string
          status: string | null
          submitted_at: string | null
        }
        Insert: {
          data: Json
          email_error?: string | null
          email_sent?: boolean | null
          email_sent_at?: string | null
          form_type: string
          id?: string
          status?: string | null
          submitted_at?: string | null
        }
        Update: {
          data?: Json
          email_error?: string | null
          email_sent?: boolean | null
          email_sent_at?: string | null
          form_type?: string
          id?: string
          status?: string | null
          submitted_at?: string | null
        }
        Relationships: []
      }
      form_templates: {
        Row: {
          created_at: string
          email_template: string | null
          fields: Json
          form_type: string
          id: string
          is_active: boolean | null
          name: string
          redirect_url: string | null
          success_message: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email_template?: string | null
          fields: Json
          form_type: string
          id?: string
          is_active?: boolean | null
          name: string
          redirect_url?: string | null
          success_message?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email_template?: string | null
          fields?: Json
          form_type?: string
          id?: string
          is_active?: boolean | null
          name?: string
          redirect_url?: string | null
          success_message?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      navigation_items: {
        Row: {
          created_at: string
          display_order: number | null
          icon_name: string | null
          id: string
          is_active: boolean | null
          is_external: boolean | null
          label: string
          menu_type: string | null
          parent_id: string | null
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          display_order?: number | null
          icon_name?: string | null
          id?: string
          is_active?: boolean | null
          is_external?: boolean | null
          label: string
          menu_type?: string | null
          parent_id?: string | null
          updated_at?: string
          url: string
        }
        Update: {
          created_at?: string
          display_order?: number | null
          icon_name?: string | null
          id?: string
          is_active?: boolean | null
          is_external?: boolean | null
          label?: string
          menu_type?: string | null
          parent_id?: string | null
          updated_at?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "navigation_items_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "navigation_items"
            referencedColumns: ["id"]
          },
        ]
      }
      page_seo: {
        Row: {
          canonical_url: string | null
          created_at: string
          focus_keywords: string[] | null
          id: string
          is_active: boolean | null
          meta_description: string | null
          meta_keywords: string[] | null
          meta_title: string | null
          og_description: string | null
          og_image: string | null
          og_title: string | null
          og_type: string | null
          page_path: string
          page_title: string
          robots_directives: string | null
          schema_markup: Json | null
          twitter_card: string | null
          twitter_description: string | null
          twitter_image: string | null
          twitter_title: string | null
          updated_at: string
        }
        Insert: {
          canonical_url?: string | null
          created_at?: string
          focus_keywords?: string[] | null
          id?: string
          is_active?: boolean | null
          meta_description?: string | null
          meta_keywords?: string[] | null
          meta_title?: string | null
          og_description?: string | null
          og_image?: string | null
          og_title?: string | null
          og_type?: string | null
          page_path: string
          page_title: string
          robots_directives?: string | null
          schema_markup?: Json | null
          twitter_card?: string | null
          twitter_description?: string | null
          twitter_image?: string | null
          twitter_title?: string | null
          updated_at?: string
        }
        Update: {
          canonical_url?: string | null
          created_at?: string
          focus_keywords?: string[] | null
          id?: string
          is_active?: boolean | null
          meta_description?: string | null
          meta_keywords?: string[] | null
          meta_title?: string | null
          og_description?: string | null
          og_image?: string | null
          og_title?: string | null
          og_type?: string | null
          page_path?: string
          page_title?: string
          robots_directives?: string | null
          schema_markup?: Json | null
          twitter_card?: string | null
          twitter_description?: string | null
          twitter_image?: string | null
          twitter_title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      pdfs: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          file_path: string
          id: string
          level: string | null
          pages: number | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          file_path: string
          id?: string
          level?: string | null
          pages?: number | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          file_path?: string
          id?: string
          level?: string | null
          pages?: number | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      seo_analytics: {
        Row: {
          clicks: number | null
          created_at: string
          ctr: number | null
          date_recorded: string | null
          id: string
          impressions: number | null
          keyword: string | null
          page_path: string
          position: number | null
        }
        Insert: {
          clicks?: number | null
          created_at?: string
          ctr?: number | null
          date_recorded?: string | null
          id?: string
          impressions?: number | null
          keyword?: string | null
          page_path: string
          position?: number | null
        }
        Update: {
          clicks?: number | null
          created_at?: string
          ctr?: number | null
          date_recorded?: string | null
          id?: string
          impressions?: number | null
          keyword?: string | null
          page_path?: string
          position?: number | null
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          created_at: string
          description: string | null
          id: string
          key: string
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          key: string
          updated_at?: string
          value: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          key?: string
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      smtp_configs: {
        Row: {
          created_at: string
          daily_limit: number | null
          host: string
          id: string
          is_active: boolean
          name: string
          password: string
          port: number
          updated_at: string
          use_ssl: boolean
          username: string
          warmup_status: string | null
        }
        Insert: {
          created_at?: string
          daily_limit?: number | null
          host: string
          id?: string
          is_active?: boolean
          name: string
          password: string
          port?: number
          updated_at?: string
          use_ssl?: boolean
          username: string
          warmup_status?: string | null
        }
        Update: {
          created_at?: string
          daily_limit?: number | null
          host?: string
          id?: string
          is_active?: boolean
          name?: string
          password?: string
          port?: number
          updated_at?: string
          use_ssl?: boolean
          username?: string
          warmup_status?: string | null
        }
        Relationships: []
      }
      state_intelligence: {
        Row: {
          average_loss: number
          created_at: string
          description: string | null
          field_office: string
          id: string
          phone_number: string
          regional_hotspots: Json
          state_code: string
          state_name: string
          top_scam_types: Json
          total_cases: number
          total_losses: number
          updated_at: string
          year_over_year_increase: number
          yearly_data: Json
        }
        Insert: {
          average_loss: number
          created_at?: string
          description?: string | null
          field_office: string
          id?: string
          phone_number: string
          regional_hotspots: Json
          state_code: string
          state_name: string
          top_scam_types: Json
          total_cases: number
          total_losses: number
          updated_at?: string
          year_over_year_increase: number
          yearly_data: Json
        }
        Update: {
          average_loss?: number
          created_at?: string
          description?: string | null
          field_office?: string
          id?: string
          phone_number?: string
          regional_hotspots?: Json
          state_code?: string
          state_name?: string
          top_scam_types?: Json
          total_cases?: number
          total_losses?: number
          updated_at?: string
          year_over_year_increase?: number
          yearly_data?: Json
        }
        Relationships: []
      }
      team_members: {
        Row: {
          bio: string | null
          created_at: string
          display_order: number | null
          email: string | null
          expertise: string[] | null
          id: string
          image_url: string | null
          is_active: boolean | null
          linkedin_url: string | null
          name: string
          phone: string | null
          role: string
          updated_at: string
        }
        Insert: {
          bio?: string | null
          created_at?: string
          display_order?: number | null
          email?: string | null
          expertise?: string[] | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          linkedin_url?: string | null
          name: string
          phone?: string | null
          role: string
          updated_at?: string
        }
        Update: {
          bio?: string | null
          created_at?: string
          display_order?: number | null
          email?: string | null
          expertise?: string[] | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          linkedin_url?: string | null
          name?: string
          phone?: string | null
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      admin_exists: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_current_user_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
