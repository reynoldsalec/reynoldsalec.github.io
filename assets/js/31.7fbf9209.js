(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{337:function(t,e,a){"use strict";a.r(e);var s=a(5),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Auth0 has pretty "),e("a",{attrs:{href:"https://auth0.com/docs/protocols/saml/saml-configuration/special-configuration-scenarios/signing-and-encrypting-saml-requests#send-encrypted-saml-authentication-assertions",target:"_blank",rel:"noopener noreferrer"}},[t._v("good docs on this process"),e("OutboundLink")],1),t._v(", but there are some formatting tricks that you may not be familiar with if you don't normally deal with openssl, SAML metadata, and other specifics.")]),t._v(" "),e("h2",{attrs:{id:"_1-get-the-cert-and-or-public-key-from-the-service-provider-sp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-get-the-cert-and-or-public-key-from-the-service-provider-sp"}},[t._v("#")]),t._v(" 1. Get the cert and/or public key from the Service Provider (SP)")]),t._v(" "),e("p",[t._v("Ideally these will come as .pem or .crt text files pre-formatted for you, however, we've seen providers simply hand over SAML metadata with only the encryption cert provided.")]),t._v(" "),e("p",[t._v("In that case, you'll need to find the encryption cert within the provided metadata. Often it's nested in a XML element like "),e("code",[t._v("<ds:X509Certificate>")]),t._v(".")]),t._v(" "),e("p",[t._v("Note that sometimes you will get a .pem file that includes multiple certificates in a chain. As long as these certs are in the "),e("a",{attrs:{href:"https://serverfault.com/questions/476576/how-to-combine-various-certificates-into-single-pem",target:"_blank",rel:"noopener noreferrer"}},[t._v("correct order"),e("OutboundLink")],1),t._v(", you should be ok to use the .pem file as-is.")]),t._v(" "),e("h2",{attrs:{id:"_2-format-the-cert-correctly-if-necessary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-format-the-cert-correctly-if-necessary"}},[t._v("#")]),t._v(" 2. Format the cert correctly (if necessary)")]),t._v(" "),e("p",[t._v("A certificate should look like this:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("-----BEGIN CERTIFICATE-----\nMIIC9ECCAd2aAwIBAgLJAdDlNJbJwi9NMA0GCSqGSIb3DQEBCwUAMBgxFjAUBgNV\n...[many other lines]\n-----END CERTIFICATE-----\n")])])]),e("p",[t._v("If you weren't provided a cert formatted this way or had to pull the cert out of a client's metadata, you can manually add in those headers/footers OR you can use "),e("a",{attrs:{href:"https://www.samltool.com/format_x509cert.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("this handy formatter"),e("OutboundLink")],1),t._v(" from the gracious folks at "),e("a",{attrs:{href:"https://www.onelogin.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OneLogin"),e("OutboundLink")],1),t._v(', a popular Auth0 competitor. Just paste in the cert from the metadata and save the output provided in the "X.509 cert with header" box.')]),t._v(" "),e("p",[t._v("Otherwise if you have a certificate in this format, skip this step.")]),t._v(" "),e("h2",{attrs:{id:"_3-generate-the-public-key-from-the-cert-if-necessary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-generate-the-public-key-from-the-cert-if-necessary"}},[t._v("#")]),t._v(" 3. Generate the public key from the cert (if necessary)")]),t._v(" "),e("p",[t._v("If you don't have the public key, you can use openssl on your command line to generate it from the certificate:")]),t._v(" "),e("p",[e("code",[t._v("openssl x509 -in certificate.pem -pubkey -noout > public_key.pem")])]),t._v(" "),e("p",[t._v("That example assumes your correctly formatted certificate is saved as "),e("code",[t._v("certificate.pem")]),t._v(", and outputs the "),e("code",[t._v("public_key.pem")]),t._v(" file in the correct formatting.")]),t._v(" "),e("p",[t._v("Note that this command may need some modification depending on your version of openssl/OS...it has worked well for me on MacOS for several years.")]),t._v(" "),e("h2",{attrs:{id:"_4-json-encode-the-public-key-and-cert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-json-encode-the-public-key-and-cert"}},[t._v("#")]),t._v(" 4. JSON encode the public key and cert")]),t._v(" "),e("p",[t._v("Both the certs will need to be formatted in JSON-friendly strings to insert to your Auth0 rule like this:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('"-----BEGIN PUBLIC KEY-----\\nnMIIC8jCCBdqgAwIBAgIJObB6jmhG0QOEMA0GCSqGSIb3DQEEBQUAMCAxHjAcBgNV\\n[..all the other lines..]-----END PUBLIC KEY-----\\n";\n')])])]),e("p",[t._v("Note the "),e("code",[t._v("\\n")]),t._v(" newline characters throughout. To convert your existing cert/key text to that format, paste them in to "),e("a",{attrs:{href:"https://jsonformatter.org/json-escape",target:"_blank",rel:"noopener noreferrer"}},[t._v("this JSON Escape tool"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"_5-add-them-to-your-auth0-rule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-add-them-to-your-auth0-rule"}},[t._v("#")]),t._v(" 5. Add them to your Auth0 Rule")]),t._v(" "),e("p",[t._v("Finally, go to the Auth0 rule you want to use for this text and add the keys as indicated in the Auth0 docs:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this rule sets a specific public key to encrypt the SAML assertion generated from Auth0")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientID "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'THE_CLIENT_ID_OF_THE_APP_WITH_THE_SAML_APP_ADDON'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t  context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("samlConfiguration "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("samlConfiguration "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("samlConfiguration"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encryptionPublicKey "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----BEGIN PUBLIC KEY-----\\nnMIIC8jCCBdqgAwIBAgIJObB6jmhG0QOEMA0GCSqGSIb3DQEEBQUAMCAxHjAcBgNV\\n[..all the other lines..]-----END PUBLIC KEY-----\\n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("samlConfiguration"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encryptionCert "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----BEGIN CERTIFICATE-----\\nnnMIIC8jCCBdqgAwIBAgIJObB6jmhG0QOEMA0GCSqGSIb3DQEEBQUAMCAxHjAcBgNV\\n[..all the other lines..]-----END CERTIFICATE-----\\n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);