#!/bin/bash

if [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
	echo "Usage: ./start-local.sh [-h | --help] [-d | --debug]"
	echo ""
	echo "This script starts locally the project adcart-dashboard."
	echo "By default, it works silently only printing the output of npm run dev."
	echo "With the flag -d/--debug, it opens a new terminal window where the output"
	echo "of redis-server can be seen as well."
elif [ "$1" = "-d" ] || [ "$1" = "--debug" ]; then
	gnome-terminal --tab -e "redis-server" --tab -e "npm run dev"
elif [ "$1" = "" ]; then
	redis-server > /dev/null 2>&1 &
	npm run dev
else
	echo "Unknown option: $1"
	echo "Usage: ./start-local.sh [-h | --help] [-d | --debug]"
fi
