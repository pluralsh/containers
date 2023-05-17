FROM apache/superset:1.5.0

USER root

COPY requirements.txt requirements.txt
RUN pip freeze | grep -i apache-superset > protected-packages.txt \
 && pip install --constraint ./protected-packages.txt --no-cache-dir -r ./requirements.txt \
 && rm -rf ./protected-packages.txt ./requirements.txt

USER superset
