import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";

const client = jwksClient({
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.getPublicKey();
    callback(null, signingKey);
  });
}

export function customJwtMiddleware(req, res, next) {
  const token = req.cookies?.acess_token;

  console.log("Acess token from middleware:", token);

  if (!token) {
    return res.status(401).json({ error: "Token missing" });
  }

  jwt.verify(
    token,
    getKey,
    {
      audience: process.env.AUTH0_AUDIENCE,
      issuer: `https://${process.env.AUTH0_DOMAIN}/`,
      algorithms: ["RS256"],
    },
    (err, decoded) => {
      if (err) return res.status(401).json({ error: "Invalid token" });

      req.user = decoded;
      next();
    }
  );
}
