FROM apache/superset:1.5.3

USER root

COPY requirements.txt plrl_requirements.txt
RUN pip install --no-cache -r plrl_requirements.txt


USER superset
