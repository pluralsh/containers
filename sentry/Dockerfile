FROM docker.io/getsentry/sentry:24.2.0

COPY requirements.txt requirements.txt
RUN pip freeze | grep -i sentry > protected-packages.txt \
 && pip install --constraint ./protected-packages.txt --no-cache-dir -r ./requirements.txt \
 && rm -rf ./protected-packages.txt ./requirements.txt
