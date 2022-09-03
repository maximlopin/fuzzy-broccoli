for i in {1..50}; do curl -o /dev/null -s http://localhost:80/200; done;
for i in {1..40}; do curl -o /dev/null -s http://localhost:80/300; done;
for i in {1..30}; do curl -o /dev/null -s http://localhost:80/400; done;
for i in {1..20}; do curl -o /dev/null -s http://localhost:80/500; done;