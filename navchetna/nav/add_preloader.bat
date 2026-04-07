@echo off
echo Adding image preloader to all HTML files...

REM List of directories to process
set "dirs=services contact career interactive-tour news privacy support terms"

REM Process main directories
for %%d in (%dirs%) do (
    if exist "%%d\index.html" (
        echo Processing %%d\index.html...
        powershell -Command "(Get-Content '%%d\index.html') -replace '    <!-- Lucide Icons -->\r?\n    <script src=\"https://unpkg.com/lucide@latest\"></script>', '    <!-- Lucide Icons -->`r`n    <script src=\"https://unpkg.com/lucide@latest\"></script>`r`n    <!-- Image Preloader -->`r`n    <script src=\"/assets/js/imagePreloader.js\"></script>' | Set-Content '%%d\index.html'"
    )
)

REM Process news subdirectories
if exist "news\company\index.html" (
    echo Processing news\company\index.html...
    powershell -Command "(Get-Content 'news\company\index.html') -replace '    <!-- Lucide Icons -->\r?\n    <script src=\"https://unpkg.com/lucide@latest\"></script>', '    <!-- Lucide Icons -->`r`n    <script src=\"https://unpkg.com/lucide@latest\"></script>`r`n    <!-- Image Preloader -->`r`n    <script src=\"/assets/js/imagePreloader.js\"></script>' | Set-Content 'news\company\index.html'"
)

if exist "news\product\index.html" (
    echo Processing news\product\index.html...
    powershell -Command "(Get-Content 'news\product\index.html') -replace '    <!-- Lucide Icons -->\r?\n    <script src=\"https://unpkg.com/lucide@latest\"></script>', '    <!-- Lucide Icons -->`r`n    <script src=\"https://unpkg.com/lucide@latest\"></script>`r`n    <!-- Image Preloader -->`r`n    <script src=\"/assets/js/imagePreloader.js\"></script>' | Set-Content 'news\product\index.html'"
)

echo Done! Image preloader has been added to all HTML files.
pause