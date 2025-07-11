#!/bin/bash
# Script to create image directory structure

echo "Creating image directory structure..."

# Create main directories
mkdir -p public/images/chest-xray
mkdir -p public/images/ct-scans
mkdir -p public/images/logos
mkdir -p public/images/general
mkdir -p public/images/flashcards

echo "Image directories created!"
echo ""
echo "Now add your images to these folders:"
echo "📁 public/images/chest-xray/ - Chest X-ray images"
echo "📁 public/images/ct-scans/ - CT scan images"
echo "📁 public/images/logos/ - Logo files"
echo "📁 public/images/general/ - General medical images"
echo "📁 public/images/flashcards/ - Flashcard medical images"
echo ""
echo "Remember to update the image paths in your data files!"