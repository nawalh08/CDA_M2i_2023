# Les unités de mesure en css 

## 1. Pixels(`px`)
- **Définition :** Les pixels sont une unité de mesure fixe qui définit la taille de la police en fonction des pixels de l'écran. Les tailles en pixels sont absolues, ce qui signifie qu'elles ne changent pas en fonction de la résolution de l'écran ou des préférences de l'utilisateur.

## 2. Points (`pt`)
- **Définition :** Les points sont une mesure d'impression couramment utilisés. Cependant, en CSS, ils sont également pris en charge pour définir la taille de la police sur l'écran. Notez que 1point équivaut à environ 1/72e de pouce.

## 3. Em (`em`)
- **Définition :** l'Unité em est relative à la taille de la police de l'élémént parent. Par exemple si la taille de l'élément parent est de 16px , 1em équivaut à 16px. Si vous définissez le font-size à 2em, cela équivaut à une taille de 32px. On peut utiliser des nombres à virgule. (ex: 1.2em)

## 4. Rem (`rem`)
- **Définition :** L'unité rem est similaire à em, mais elle est basée sur la taille de police de l'élément racine. Cela garantit une coherence globale dans toute la page. 
La taille par défaut de ma racine est par défaut égale à 16px sur la plupart des navigateurs.

## 5. Le pourcentage :** 
- **Définition :** Ils sont une autre unité de mesurre relative qui dépend de la taille de l'élément parents.
Par exemple, si l'élément parent à une taille de police 20px et que vous utilisez `font-size:150%` , la taille de police sera de 30px.

## 6. Les `vw` et les `vh`
- **Définition :** Les unités vw et vh sont relatives à la largeur et la hauteur de la fenêtre d'affichage. Par exemple, `font-size: 5vw` définira la taille de la police à 5% de la largeur de la fenêtre.

