FROM docker.io/dagster/user-code-example:1.6.8

COPY requirements.txt requirements.txt
RUN pip freeze | grep -i dagster > protected-packages.txt \
 && pip install --constraint ./protected-packages.txt --no-cache-dir -r ./requirements.txt \
 && rm -rf ./protected-packages.txt ./requirements.txt
