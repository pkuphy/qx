let html = $response.body;

const styleContent = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400;1,8..60,600&display=swap" rel="stylesheet">
    <style>
    body {
      font-size: 1.8rem;
      font-family: "Source Serif 4", serif;
    }
    .content p, .content ul {
      line-height: 1.6em;
    }
    </style>
`;

const newContent = html.replace("</head>", `${styleContent}  </head>`);

$done({body: newContent});
