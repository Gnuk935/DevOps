#!/bin/bash
echo "Iniciando o processo de configuração do servidor"
ls
mkdir -v $SERVER 
cd $SERVER
wget $URLSERVER
if [ $? -eq 0 ]
then
	FORGE=$(ls)
	echo "O nome do zip e: ${FORGE}"
	unzip $FORGE
	if [ $? -eq 0 ]
	then
		rm $FORGE
		if [ $? -eq 0 ]
		then
			TMPSERVERDIR=$(ls)
			echo "O caminho do servidor e: $TMPSERVERDIR"
			mv -v ./$TMPSERVERDIR ./$SERVERNAME
			if [ $? -eq 0 ]
			then
				cd $SERVERNAME
				ROOTSERVER=$(pwd)
				echo " o root server é: $ROOTSERVER"
				echo "eula=true" > ./eula.txt
				ls
				if [ $? -eq 0 ]
				then
					rm $ROOTSERVER/server.properties
					if [ $? -eq 0 ]
					then
					bash $DIRSCRIPTS/gerarProp.sh $ROOTSERVER/server.properties
					echo "Ok"
					exit 1
					else
						echo "Errro ao remover o server.properties"
						exit 1
					fi
				else
					echo "Erro ao alterar permissão do script"
					exit 1
				fi
			else
				echo "Erro ao renomear o"
				echo $TMPSERVERDIR
				exit 1
			fi
		else
			echo "Erro ao remover o zip"
			echo $FORGE
			exit 1
		fi
	else
		echo "Erro ao descompactar o modpack"
		echo $FORGE
		exit 1
	fi
else
	echo "Erro ao baixar o servidor"
	exit 1
fi
