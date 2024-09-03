# -*- mode: Dockerfile -*-

ARG BASE=trophime/opengl:1.7.0-glvnd-runtime-ubuntu24.04

FROM ${BASE}
LABEL maintainer Christophe Trophime <christophe.trophime@lncmi.cnrs.fr>

USER root

ARG USERNAME=feelpp
ARG VGLUSER_GID=1002

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

# Setup demo environment variables
ENV LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8 \
    LC_ALL=C.UTF-8 \
    XLIB_SKIP_ARGB_VISUALS=1

# Set correct timezone
RUN apt-get update \
    && apt-get -y install --no-install-recommends tzdata \
    && echo "Europe/Paris" | tee /etc/timezone \
    && dpkg-reconfigure --frontend noninteractive tzdata

# Configure apt and install packages for dev
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils apt-file dialog 2>&1 \
    && apt-file update \
    # \
    # Verify git, process tools, lsb-release (useful for CLI installs) installed\
    && apt-get -y install git git-lfs debian-keyring lsb-release wget curl sudo \
    && apt-get -y install emacs-nox vim-nox  \
    && apt-get -y install mesa-utils \
    #\
    # Install C++ tools\
    && apt-get -y install build-essential \
    && apt-get -y install g++ \ 
    #\
    # Install python tools\
    && apt-get -y install python3-minimal libpython3-dev python3-env swig \
    && apt-get -y install python-is-python3 python3-pip python3-jinja2 \
    && apt-get -y install python3-autopep8 black yapf3 python3-bandit flake8 pydocstyle pylint python3-pytest mypy \
    && apt install libglu1-mesa libxcursor1 libxinerama1


# Eventually add USERNAME to VGLUSERS group (to be created if not present)
# for dev:
#set up user so that we do not run as root
RUN if [ "$(grep -c ${VGLUSER_GID} /etc/group)" -eq 0 ]; then groupadd -g ${VGLUSER_GID} vglusers; fi && \
    useradd -m -s /bin/bash -G sudo,video,vglusers ${USERNAME} && \
    mkdir -p  /etc/sudoers.d/ && \
    echo "${USERNAME} ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/${USERNAME}

RUN mkdir -p ~${USERNAME}/.ssh/ \
    && ssh-keyscan github.com >> ~${USERNAME}/.ssh/known_hosts \
    && chown -R ${USERNAME}.$USER_GID ~${USERNAME}/.ssh

# Switch to USERNAME
USER ${USERNAME}

# Switch back to dialog for any ad-hoc use of apt-get
ENV DEBIAN_FRONTEND=dialog

COPY start-venv.sh /home/${USERNAME}
RUN /home/${USERNAME}/start-venv.sh

WORKDIR /home/${USERNAME}
CMD [ "source", "/home/${USERNAME}/gmsh-env/bin/activate" ]
