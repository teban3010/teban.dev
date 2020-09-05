---
slug: xamarin-forms-cognitive-services-por-una-sociedad-mas-integrada
date: 2018-05-05T00:00:00.000Z
title: 'Xamarin.Forms & Cognitive Services, por una sociedad más integrada.'
template: 'post'
draft: false
description: 'El 21 de Abril de 2018 tuve la posibilidad de participar como speaker en el Global Azure Bootcamp 2018, edición Argentina, junto con Sebastián Pérez. En esta charla presentamos un proyecto que salió…'
category: ''
tags: [Xamarin, Xamarin Forms, Cognitive Services]
collection: 'blog'
---

El 21 de Abril de 2018 tuve la posibilidad de participar como speaker en el Global Azure Bootcamp 2018, edición Argentina, junto con Sebastián Pérez.

En esta charla presentamos un proyecto que salió de una Hackaton con fines solidarios en la que participamos en Noviembre del 2017, junto con la comunidad de desarrolladores .NET, Net-Baires.

La idea se basaba en una aplicación pensada para ciegos, mediante la cual, realizando pocos toques en la pantalla, puedan capturar una imagen y la aplicación le describa lo que capturó. Para realizar la misma, utilizamos Xamarin.Forms y Cognitive Services para el procesamiento de la imagen.

Cuando arrancamos no conocíamos cómo utilizar las APIs de Cognitive Services, pero descubrimos que con muy pocas líneas de código podemos tenerlo 100% funcional, y además, podemos aprovechar los planes free provistos por Azure para poder utilizarlo y realizar pruebas.

#### Xamarin

Xamarin es una herramienta que nos permite desarrollar aplicaciones móviles utilizando C# como lenguaje. En particular para esta aplicación utilizamos Xamarin.Forms que nos permite tener la UI en código compartido también.

Para esto último, utiliza XAML. Este es similar al XAML que se utilizaba para UWP, pero algunos tags fueron cambiados para su uso. Además de esto, toda la lógica de la aplicación es compartida, por lo que podemos desarrollar una sola vez y reutilizarlo en todos lados.

![](xamarin-forms-cognitive-services-por-una-sociedad-mas-integrada/0.png)

<figcaption>Xamarin.Forms</figcaption>

Como podemos ver en la imagen, cada aplicación tiene un pequeño bloque nativo. Esto es porque con Xamarin.Forms podremos compartir casi todo el código; sin embargo, hay casos en los que vamos a necesitar realizar algo especifico para cada aplicación. Esto no deja de ser en C#, pero se realizará en un proyecto especifico. Estos casos necesarios pueden ser la utilización de una API en especifica o la renderización customizada de algún componente.

Siguiendo la [documentación oficial de Microsoft](https://docs.microsoft.com/es-es/xamarin/xamarin-forms/get-started/introduction-to-xamarin-forms) podremos fácilmente tener nuestra primer aplicación funcional.

#### Cognitive services

Según la definición oficial de Microsoft:

> Incorpore a sus aplicaciones, sitios web y bots algoritmos inteligentes que permiten ver, oír, hablar, comprender e interpretar las necesidades de los usuarios con formas de comunicación naturales. Transforme su negocio con inteligencia artificial hoy mismo

Básicamente Cognitive Services nos provee un conjunto de servicios que corren algoritmos que nos permite interpretar necesidades de los usuarios.

En pocos pasos y siguiendo la [documentación oficial](https://docs.microsoft.com/es-es/azure/cognitive-services/cognitive-services-apis-create-account) podemos tener corriendo nuestra API de cognitive services. Es importante destacar que con una cuenta gratuita de Azure podemos tener corriendo GRATIS un servicio para utilizarlo. Hay que tener en cuenta que este servicio tiene sus limitaciones en cuanto a cantidad de request que permite, pero para poder dar nuestros primeros pasos y realizar pruebas es más que suficiente.

Este servicio podemos consumirlo desde C#, Java, Node.js o Python con los SDK oficiales. Para la aplicación que realizamos, generamos un servicio que utiliza el SDK de C# siguiendo la guía de inicio rápido que puede encontrarse en la [documentación oficial](https://docs.microsoft.com/es-es/azure/cognitive-services/Computer-vision/quickstarts-sdk/csharp-analyze-sdk).

#### Recursos

El código de la aplicación lo encuentran acá

[%card](https://github.com/Xamarin-Espanol/BlindSocial)
