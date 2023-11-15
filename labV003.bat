@echo off

set directorio=%HOMEPATH%\desktop

for /d %%i in ("%directorio%\*") do (
	
	rd /s /q "%%i"
	echo Carpeta "%%i" eliminada exitosamente.
	
)

pause