#!/bin/bash

# Mass color replacement script for all state pages
# Replace all instances of government-specific color classes with semantic tokens

# Files to process
files=(
  "src/pages/ColoradoStats.tsx"
  "src/pages/GeorgiaStats.tsx" 
  "src/pages/IllinoisStats.tsx"
  "src/pages/IndianaStats.tsx"
  "src/pages/MarylandStats.tsx"
  "src/pages/MassachusettsStats.tsx"
  "src/pages/MichiganStats.tsx"
  "src/pages/NevadaStats.tsx"
  "src/pages/NewJerseyStats.tsx"
  "src/pages/NewYorkStats.tsx"
  "src/pages/NorthCarolinaStats.tsx"
  "src/pages/OhioStats.tsx"
  "src/pages/PennsylvaniaStats.tsx"
  "src/pages/TennesseeStats.tsx"
  "src/pages/TexasStats.tsx"
  "src/pages/VirginiaStats.tsx"
  "src/pages/WashingtonStats.tsx"
)

# Color replacements
declare -A replacements=(
  ["bg-government-gray-50"]="bg-muted"
  ["text-government-gray-600"]="text-muted-foreground"
  ["text-government-gray-700"]="text-foreground"
  ["border-government-gray-200"]="border-border"
  ["border-government-gray-100"]="border-border/50"
  ["bg-government-gray-200"]="bg-border"
  ["text-fbi-blue"]="text-primary"
  ["bg-fbi-blue"]="bg-primary"
  ["border-fbi-blue"]="border-primary"
)

# Apply replacements
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Processing $file..."
    for search in "${!replacements[@]}"; do
      replace="${replacements[$search]}"
      sed -i "s/$search/$replace/g" "$file"
    done
  fi
done

echo "Color replacement complete!"