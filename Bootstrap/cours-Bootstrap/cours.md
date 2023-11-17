## Connexion avec le HTML 

**A mettre dans le HEAD :**

 `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
`

**A mettre dans body mais vraiment à la fin :** 

`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>`


        
## BreakPoints

1. Extra small	None <576px
2. Small **sm** `≥576px`
3. Medium **md** `≥768px`
4. Large **lg**	`≥992px`
5. Extra large **xl** `≥1200px`
6. Extra extra large **xxl** `≥1400px`

## Creer un footer 

Il existe une classe pour creer un footer qui prend toute la largeur, et cette classe met en forme directement le footer : `class:="page-footer"` à mettre directement dans la balise footer.