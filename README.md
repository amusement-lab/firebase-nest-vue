# Nest Vue Firebase

## 1. Install dependencies separately in both folders

```bash
$ pnpm install
```

## 2. Config firebase key

Because this project use firebase to login with gmail, so you need setup the firebase service.

- for client side/dasboard you can access: [Easily add sign-in to your Web app with FirebaseUI](https://firebase.google.com/docs/auth/web/google-signin)
- for server side you can access: [Verify ID tokens using the Firebase Admin SDK](https://firebase.google.com/docs/auth/admin/verify-id-tokens#verify_id_tokens_using_the_firebase_admin_sdk)
- reference repo: [Example integration firebase with vuesj and nestjs](https://github.com/amusement-lab/firebase-nest-vue)

## 3. Config the server `.env`

1. Copy `.env.example` to `.env`

```bash
$ cp .env.example .env
```

1. `DATABASE_URL` is database URL for postgreSQL.
2. `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_BUCKET_NAME` is credential forl AWS S3. This project use S3 for upload document image.

## 4a. Running the server app

```bash
# run postgres via docker (optional if use docker)
$ docker compose up -d

# init prisma js
$ pnpm dlx prisma migrate dev
$ pnpm dlx prisma generate

# watch mode
$ pnpm dev
```

## 4b. Running the client app

```bash
# watch mode
$ pnpm dev
```

For other command scripts, please see `package.json`
