FROM apache/superset:2.1.0

USER root

COPY requirements.txt plrl_requirements.txt
RUN pip install --no-cache -r plrl_requirements.txt


USER superset
