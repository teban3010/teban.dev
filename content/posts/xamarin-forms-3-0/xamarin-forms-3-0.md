---
slug: xamarin-forms-3-0
date: 2018-06-17T00:00:00.000Z
title: 'Xamarin.Forms 3.0'
template: 'post'
draft: false
description: 'Entre el 7 y 9 de Junio se realizó el Microsoft Build, evento de conferencia anual realizado por Microsoft, dirigido a ingenieros de software y desarrolladores web que utilizan Windows, Windows…'
category: ''
tags: [Xamarin Forms, Xamarin App Development, Xamarin Development, Xamarin]
collection: 'blog'
---

Entre el 7 y 9 de Junio se realizó el Microsoft Build, evento de conferencia anual realizado por Microsoft, dirigido a ingenieros de software y desarrolladores web que utilizan Windows, Windows Phone, Microsoft Azure y otras tecnologías de Microsoft.

En este evento presentaron oficialmente Xamarin.Forms 3.0, el cual trajo muchas mejoras para quienes lo utilizamos a diario.

Si aún no sabes lo que es Xamarin y llegaste acá, te invito a pasar por mi otro post.

[%card](https://teban-dev.vercel.app/posts/introduccion-a-xamarin/)

Cuando actualizamos a Xamarin.Forms 3.0 vamos a notar mejoras de estilos y un nuevo layout que va a mejorar la forma en la que realizamos nuestra UI,. Algunos de estos cambios son _Flex Layout_, _Style Sheets_, _Visual State Manager_ y _Right-to-Left Support_. Además, la compilación de XAML tuvo especial atención, reduciendo el tiempo de esta casi en un 90%.

Vamos a ver algunos de estos features:

### Performance

¡Lo que todos estábamos esperando!

La performance es la prioridad más alta que tenemos los desarrolladores, y todo el equipo que trabaja en Xamarin lo sabe.

Una de las iniciativas que tomo el equipo de Xamarin se llama _Fast Renderers_. Las vistas en Xamarin.Forms tienen que ser renderizadas a componentes nativos para ser visualizadas y esto repercute en la performance. Con _Fast Renderers_, como su nombre lo indica, mejora la velocidad de renderización de las vistas para cada plataforma.

### **Visual State Manager**

Visual State Manager es conocido en otras plataformas con XAML y ahora esta incluido en Xamarin.Forms 3.0. Se pueden definir varios estados para nuestros layouts y controles en XAML o C#, y fácilmente actualizar nuestra UI. Acá hay una vista de la cámara que maneja orientación portrait y landscape, actualizando la disposición de sus elementos:

![](https://cdn-images-1.medium.com/max/2688/0*VXHwFXnJ7p59yojf)

Podés ver más en esta Lightning Lecture de Xamarin University:

[%card](https://university.xamarin.com/lightninglectures/xamarin-forms-30-visual-state-manager)

### Flex Layout

FlexLayout es un nuevo layout inspirado en [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Así como los browsers pueden tener cualquier tamaño, la variedad de dimensiones de pantalla en las que pueden correr nuestras aplicaciones en Xamarin.Forms crecieron. Flexlayout es ideal para manejar la distribución y el espaciado entre componentes. Además, provee control a la dirección, justificación y alineación del layout, entre otras propiedades.

![](https://cdn-images-1.medium.com/max/3840/0*I1PofZ8eULE2U1ph)

Podés ver más en esta Lightning Lecture de Xamarin University:

[%card](https://university.xamarin.com/lightninglectures/xamarin-forms-30-flex-layout)

### Style Sheets

Cascading Style Sheets (CSS) es el compañero natural de FlexLayout. Usar CSS es ahora una opción para estilar nuestro layout en XAML. Esto es una especial mejora para quienes venían trabajando con tecnologías Web. Sin embargo, para quienes prefieran estilar sus vistas utilizando XAML, lo van a poder seguir haciendo.

StyleSheets pueden agregarse en un archivo CSS separado, o inline en Resources.

![](https://cdn-images-1.medium.com/max/2688/0*lNdcjuc9F-BGd1IK)

Podés ver más en esta Lightning Lecture de Xamarin University:

[%card](https://university.xamarin.com/lightninglectures/xamarin-forms-30-css)

### Right-to-Left Support

Para poder soportar lenguajes como Árabe o Hebreo, que van de derecha a izquierda, podemos sencillamente cambiar la propiedad FlowDirection de cualquier VisualElement en lugar de utilizar [platform-specifics](https://docs.microsoft.com/en-us/xamarin/xamarin-forms/platform/platform-specifics/) o [effects](https://docs.microsoft.com/en-us/xamarin/xamarin-forms/app-fundamentals/effects/introduction) como se realizaba anteriormente.

Para más información podés ver este blogpost:

[%card](https://blog.xamarin.com/right-to-left-localization-xamarin-forms/)

O esta Lightning Lecture de Xamarin University:

[%card](https://university.xamarin.com/lightninglectures/xamarin-forms-30-right-to-left)

### Más recursos

Video de la conferencia donde se presenta oficialmente Xamarin.Forms 3.0:

[%card](https://channel9.msdn.com/Events/Build/2018/BRK2437)
