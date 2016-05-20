# molinadasboard

Kelompok:
- Nugroho Permata Putra
- Tri Sepdian Aditia
- Vitradisa Pratama

3d modelling team:
+ Juju juhaeriyah
+ Indah Sari Mukkarmah


Development Instructions:
- ini baru frameworknya doang, blum ada isinya.
- install NodeJs first.
- browse to this project directory inside cmd / terminal.
- install dependencies on package.json with 'npm install or npm install -g for global install' .
- install all required bower package with 'bower install bower.json'.
- run with 'npm start' .

Compile Instruction:
- install NodeJS first.
- install electron packager with 'npm install -g electron-packager' .
- browse to this project directory inside cmd / terminal .
- for 32bit windows compile using

electron-packager ./ MolinaDashboard --platform=win32 --arch=ia32 --version=0.37.2 --ignore=node_modules/* --version-string.ProductName="Molina Dashboard" --version-string.CompanyName="TMDG 10 ITB" --version-string.FileDescription="Kelompok Desain Interaksi Nugroho Permata Putra, Tri Sepdian Aditia, Vitradisa Pratama | 3d modelling team Juju juhaeriyah, Indah Sari Mukkarmah" --version-string.OriginalFilename="MolinaDashboard.exe" --version-string.ProductName="Molina Dashboard" --version-string.InternalName="Molina Dashboard Touch Windows"

- for 64bit windows compile using

electron-packager ./ MolinaDashboard --platform=win32 --arch=x64 --version=0.37.2 --ignore=node_modules/* --version-string.ProductName="Molina Dashboard" --version-string.CompanyName="TMDG 10 ITB" --version-string.FileDescription="Kelompok Desain Interaksi Nugroho Permata Putra, Tri Sepdian Aditia, Vitradisa Pratama | 3d modelling team Juju juhaeriyah, Indah Sari Mukkarmah" --version-string.OriginalFilename="MolinaDashboard.exe" --version-string.ProductName="Molina Dashboard" --version-string.InternalName="Molina Dashboard Touch Windows"

- for all platfomn compile using

electron-packager ./ MolinaDashboard --platform=all --arch=all --version=0.37.2 --ignore=node_modules/* --version-string.ProductName="Molina Dashboard" --version-string.CompanyName="TMDG 10 ITB" --version-string.FileDescription="Kelompok Desain Interaksi Nugroho Permata Putra, Tri Sepdian Aditia, Vitradisa Pratama | 3d modelling team Juju juhaeriyah, Indah Sari Mukkarmah" --version-string.OriginalFilename="MolinaDashboard.exe" --version-string.ProductName="Molina Dashboard" --version-string.InternalName="Molina Dashboard Touch Windows"
