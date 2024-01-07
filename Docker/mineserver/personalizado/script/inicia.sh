#!/bin/bash
echo "Iniciando o container"
ls -lahR
STATS=$(head -n 1 $DIRSCRIPTS/stats.txt)
echo "O stats atual é: $STATS"
if [ $STATS -eq 1 ]
then
bash $DIRSCRIPTS/configServer.sh
if [ $? -eq 0 ]
then
    echo "Config feita"
    echo "0" > $DIRSCRIPTS/stats.txt
    cat $DIRSCRIPTS/stats.txt
else
    echo  "Não configurado"
    echo "1" > $DIRSCRIPTS/stats.txt
    cat $DIRSCRIPTS/stats.txt
fi
echo "Verificando os mods"
bash $DIRSCRIPTS/baixaMods.sh
else
    echo "Server já configurado"
fi
echo "Startando server"
cd $DIRSERVER
ls
bash $DIRSERVER/$START