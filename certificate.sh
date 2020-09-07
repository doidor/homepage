#!/bin/bash

EMAIL=""
DOMAIN=""
NAMESPACE=""

for i in "$@"
do
case $i in
    -e=*|--email=*)
    EMAIL="${i#*=}"
    ;;

    -d=*|--domain=*)
    DOMAIN="${i#*=}"
    ;;

    -n=*|--namespace=*)
    NAMESPACE="${i#*=}"
    ;;

    *)
    ;;
esac
done


cat << EOF | kubectl apply -f -
---
apiVersion: cert-manager.io/v1alpha2
kind: ClusterIssuer
metadata:
  name: letsencrypt
spec:
  acme:
    # You must replace this email address with your own.
    # Let's Encrypt will use this to contact you about expiring
    # certificates, and issues related to your account.
    email: ${EMAIL}
    server: https://acme-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      # Secret resource used to store the account's private key.
      name: letsencrypt-issuer-account-key
    # Add a single challenge solver, HTTP01 using nginx
    solvers:
    - http01:
        ingress:
          class: traefik
---
apiVersion: cert-manager.io/v1alpha2
kind: Certificate
metadata:
  name: ${DOMAIN}-cert
  namespace: ${NAMESPACE}
spec:
  commonName: ${DOMAIN}
  dnsNames:
    - ${DOMAIN}
  secretName: ${DOMAIN}-cert
  issuerRef:
    name: letsencrypt
    kind: ClusterIssuer
---
EOF
