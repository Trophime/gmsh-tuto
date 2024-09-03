#! /bin/bash

python -m venv --system-site-packages $HOME/gmsh-env &&\
. $HOME/gmsh-env/bin/activate && \
python -m pip install gmsh
deactivate
