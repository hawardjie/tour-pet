# OAuth Integration Setup Guide

This guide will help you set up OAuth authentication for TourPet with various providers.

## Prerequisites

1. Your application must be accessible via a public URL (use ngrok for local development)
2. For production, use your actual domain (e.g., https://tour.pet)

## General Setup

Add these required variables to your `.env.local` file:

```bash
NEXTAUTH_URL=http://localhost:3000  # Change to your domain in production
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production  # Generate with: openssl rand -base64 32
```

## 1. Google OAuth Setup

### Steps:
1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new project or select an existing one
3. Enable "Google+ API"
4. Go to "Credentials" → "Create Credentials" → "OAuth client ID"
5. Choose "Web application"
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://tour.pet/api/auth/callback/google` (production)

### Add to .env.local:
```bash
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## 2. Facebook OAuth Setup

### Steps:
1. Go to [Facebook Developers](https://developers.facebook.com/apps)
2. Create a new app → Choose "Consumer" app type
3. Add "Facebook Login" product
4. Go to Settings → Basic → Get your App ID and App Secret
5. In Facebook Login Settings, add Valid OAuth Redirect URIs:
   - `http://localhost:3000/api/auth/callback/facebook`
   - `https://tour.pet/api/auth/callback/facebook`

### Add to .env.local:
```bash
FACEBOOK_CLIENT_ID=your-facebook-app-id
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret
```

## 3. Apple OAuth Setup

### Steps:
1. Go to [Apple Developer Portal](https://developer.apple.com/account/resources/identifiers/list/serviceId)
2. Create a new Services ID
3. Enable "Sign in with Apple"
4. Configure domains and redirect URLs:
   - Domain: `localhost:3000` (dev) or `tour.pet` (prod)
   - Redirect URL: `http://localhost:3000/api/auth/callback/apple`
5. Create a private key and download it
6. Generate client secret using the key

### Add to .env.local:
```bash
APPLE_CLIENT_ID=your.service.identifier
APPLE_CLIENT_SECRET=your-generated-client-secret
```

**Note:** Apple OAuth requires a JWT token as the client secret. See [NextAuth Apple Provider docs](https://next-auth.js.org/providers/apple) for details.

## 4. Microsoft (Azure AD) OAuth Setup

### Steps:
1. Go to [Azure Portal](https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade)
2. Click "New registration"
3. Set redirect URI to:
   - `http://localhost:3000/api/auth/callback/azure-ad` (development)
   - `https://tour.pet/api/auth/callback/azure-ad` (production)
4. Go to "Certificates & secrets" → Create a new client secret
5. Copy Application (client) ID and the client secret value

### Add to .env.local:
```bash
AZURE_AD_CLIENT_ID=your-azure-client-id
AZURE_AD_CLIENT_SECRET=your-azure-client-secret
AZURE_AD_TENANT_ID=common  # 'common' allows any Microsoft account
```

## 5. GitHub OAuth Setup

### Steps:
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in:
   - Application name: TourPet
   - Homepage URL: `http://localhost:3000` or `https://tour.pet`
   - Authorization callback URL:
     - `http://localhost:3000/api/auth/callback/github` (dev)
     - `https://tour.pet/api/auth/callback/github` (prod)
4. Copy Client ID and generate a new client secret

### Add to .env.local:
```bash
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

## 6. Twitter OAuth Setup

### Steps:
1. Go to [Twitter Developer Portal](https://developer.twitter.com/en/portal/projects-and-apps)
2. Create a new app or project
3. Enable OAuth 2.0
4. Add redirect URIs:
   - `http://localhost:3000/api/auth/callback/twitter`
   - `https://tour.pet/api/auth/callback/twitter`
5. Copy Client ID and Client Secret

### Add to .env.local:
```bash
TWITTER_CLIENT_ID=your-twitter-client-id
TWITTER_CLIENT_SECRET=your-twitter-client-secret
```

## Testing OAuth Locally with ngrok

For testing OAuth on localhost, many providers require a public URL:

1. Install ngrok: `brew install ngrok` or download from [ngrok.com](https://ngrok.com)
2. Start ngrok: `ngrok http 3000`
3. Copy the https URL (e.g., `https://abc123.ngrok.io`)
4. Update `NEXTAUTH_URL` in `.env.local`:
   ```bash
   NEXTAUTH_URL=https://abc123.ngrok.io
   ```
5. Add the ngrok URL to your OAuth provider's redirect URIs:
   ```
   https://abc123.ngrok.io/api/auth/callback/google
   https://abc123.ngrok.io/api/auth/callback/facebook
   # etc.
   ```

## Verification

After setting up OAuth providers:

1. Restart your development server
2. Go to `/auth/signin`
3. You should see buttons for configured OAuth providers
4. Unconfigured providers won't appear
5. Click a provider button to test the OAuth flow

## Important Notes

- **Redirect URIs must match exactly** - include or exclude trailing slashes consistently
- **Client secrets are sensitive** - never commit them to version control
- **NEXTAUTH_SECRET** - generate a secure random string for production:
  ```bash
  openssl rand -base64 32
  ```
- **Email/Password login** - always available, doesn't require OAuth setup

## Troubleshooting

### "Redirect URI mismatch" error
- Verify the redirect URI in your OAuth provider settings matches exactly
- Check for http vs https
- Check for trailing slashes
- Verify NEXTAUTH_URL is set correctly

### Provider button doesn't appear
- Check that both CLIENT_ID and CLIENT_SECRET are set in .env.local
- Restart the development server after adding environment variables
- Check server logs for configuration errors

### OAuth flow starts but fails
- Check client secret is correct
- Verify your app is approved/published in the provider's console
- Check that the OAuth provider has the correct permissions enabled
- Review the browser console and server logs for error messages

## Security Best Practices

1. Use different OAuth apps for development and production
2. Restrict OAuth app access to specific domains
3. Regularly rotate client secrets
4. Monitor OAuth usage in provider dashboards
5. Implement rate limiting for authentication endpoints
6. Always use HTTPS in production

## Need Help?

- NextAuth.js Documentation: https://next-auth.js.org/providers/
- Provider-specific guides linked in each section above
- Check the browser console and server logs for detailed error messages
