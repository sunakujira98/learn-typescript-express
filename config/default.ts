export default {
  port: 1337,
  // dbUri: "mongodb+srv://sunakujira98:DxEQsWcxKq2JSiPo@cluster0.pgxxh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  dbUri: 'mongodb://localhost:27017',
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  privateKey: `
-----BEGIN RSA PRIVATE KEY-----
MIICWgIBAAKBgGoDc+WwVGkA7JA69nJsCi2LU8nva95+S8xX4b42ePCM1B6Yy6x4
0Dls6SSRQqISS0AiFQr+iXcu6mW8/IIDRGArcBi8THPPvCFdUsSRi7R7gaa+hJsW
43PewTbH0BxdcMhCv3h5BrY0vuFu4JXLm/LTqspAU21itXpnAE1Z2qSNAgMBAAEC
gYALZw2rMdkSZjgLl1v0mKxLk8XSXX8jsj/i3bz5IZDGhs8170dQ6Lm0w4McHMem
+QLBBilvQkt010X85WPfdAyBjBAOc2O0UBENHDCOe7aqgNte8M2zc4HWUABOcJ4C
YCPidBNstA8VK1226yNz9brUVmHolJC1jEAKmulNs7OFXQJBAKy4XIKFcnWo+1IT
jEsURprhbGoDABNG1PjiCZRYpsTU1WSP5K5qfkcqzZTeFwvlBNa6k/JPcGZiyygJ
RyKJYnsCQQCdIS6JO9k6yt72YGz2Mze1oYGdTIlt1EPklAUuqA1S8X2QlJVfMRMM
viiqrMhuC3lBwCEmoyBJlaijUA1C7kqXAkBrKxl7gwG6L9eA3dA25aXJhAWY4bOy
QkjzBI2dFkSj7MtbUk06S6l+zvgwXn0+TCPseGhD+TZs0O/tL5SLwWLxAkA5iDi9
zsgPGtDgbRX4X3B6dJQ8wBVhvWLOgtQS7T1TrVBIa971Z8aN1+KT+4e3o0PWqz54
IypjRwTkJx9z7kQpAkAEAjfozjSt4ZjXdiu9bTgpGyid8alVcQTl2AKHROrvGXFq
IFgtduDOR46YSBSpLmpizzXvchs1p7KCAHSVufGH
-----END RSA PRIVATE KEY-----`,
  publicKey: `
-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGoDc+WwVGkA7JA69nJsCi2LU8nv
a95+S8xX4b42ePCM1B6Yy6x40Dls6SSRQqISS0AiFQr+iXcu6mW8/IIDRGArcBi8
THPPvCFdUsSRi7R7gaa+hJsW43PewTbH0BxdcMhCv3h5BrY0vuFu4JXLm/LTqspA
U21itXpnAE1Z2qSNAgMBAAE=
-----END PUBLIC KEY-----`
}