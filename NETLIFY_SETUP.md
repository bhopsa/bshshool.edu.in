# Netlify CMS Setup (quick steps)

1. Create a free account on Netlify and connect your GitHub repository `bhopsa/bshshool.edu.in`.
2. In Netlify site settings -> Identity, enable Identity and enable Git Gateway.
3. In Identity invite your admin email (the email you want to use to log in).
4. Visit `https://<your-netlify-site>/admin/` to open the CMS. Login with the invited email.
5. Media uploads will go to `assets/img/uploads/` in the repo.

Notes:
- Once configured, only invited Identity users can edit site data via Netlify CMS.
- If you prefer GitHub OAuth directly, see Netlify docs for GitHub backend configuration.
