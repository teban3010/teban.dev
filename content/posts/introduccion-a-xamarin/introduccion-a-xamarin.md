---
slug: introducci%C3%B3n-a-xamarin
date: 2018-05-19T00:00:00.000Z
title: 'Introducción a Xamarin'
template: 'post'
draft: false
description: '¿Desarrollás en C# y querés comenzar desarrollar mobile? ¿Querés conocer que es Xamarin? Acá te voy a contar todo eso. Xamarin es una compañía de software estadounidense, fundada en mayo de 2011 por…'
category: ''
tags: [Xamarin, Xamarin Forms, Xamarin App Development]
collection: 'blog'
---

¿Desarrollás en C# y querés comenzar desarrollar mobile? ¿Querés conocer que es Xamarin? Acá te voy a contar todo eso.

![Resultado de imagen para Xamarin](posts/introduccion-a-xamarin/0.png)

#### ¿Qué es Xamarin?

**Xamarin** es una compañía de _software_ estadounidense, fundada en mayo de 2011 por Nat Friedman y Miguel de Icaza, y adquirida por Microsoft en 2016.

Utilizando C# como lenguaje de programación, los desarrolladores de _software_ pueden usar Xamarin para escribir aplicaciones móviles nativas para Android, iOS y Windows, compatiendo el core de la misma.

#### ¿Eso quiere decir que la aplicación no es nativa?

La respuesta a esa pregunta es **NO.** Utilizando Xamarin vamos a tener aplicaciones Nativas. Es importante realizar una distinción importante acá entre lenguaje nativo y aplicaciones nativas. Como es de público conocimiento, los lenguajes nativos son Java o Kotling para Android, y Objective-C o Swift para iOS. Pero, ¿qué es una aplicación nativa entonces?

Para que una aplicación se pueda considerar nativa, tiene que cumplir tres condiciones fundamentales: la UI tiene que ser nativa, la performance tiene que ser nativa y tiene que tener acceso a todas las APIs nativas.

![](posts/introduccion-a-xamarin/1.png)

Xamarin cumple las tres condiciones, por lo que desarrollando con Xamarin vamos a tener una aplicación nativa.

#### ¿Cómo funciona Xamarin?

Xamarin no convierte su código a lenguaje nativo, sino que utiliza los compiladores de cada dispositivo para compilar.

En el caso de iOS compila su código utilizando Ahead Of Time (AOT) para producir los binarios necesarios para subir nuestra aplicación en el App Store.

![](posts/introduccion-a-xamarin/2.png)

Para Android, utiliza Just In Time (JIT) en el dispositivo para correr nativo.

![](posts/introduccion-a-xamarin/3.png)

#### Xamarin y Xamarin.Forms

La distincion principal entre Xamarin y Xamarin.Forms se basa en como vamos a desarrollar la UI.

Con Xamarin, que lo vamos a llamar Xamarin Tradicional para poder hacer la distinción, vamos a tener la lógica de la aplicación compartida, pero la UI vamos a hacerla especifica para cada plataforma. En el caso de Android vamos a utilizar AXML, para iOS Storyboards y para Windows XAML. Lo importante es destacar que a pesar de esto, vamos a seguir utilizando C# como code behind.

![](posts/introduccion-a-xamarin/4.png)

<figcaption>Xamarin — Traditional UI</figcaption>

Como ya dije antes, la diferencia con Xamarin.Forms es como vamos a desarrollar la UI, este nos permite tener la UI compartida también, que va a ser desarrollada utilizando XAML. La versión de XAML utilizada para Xamarin.Forms no es la misma que utilizamos para hacer las vistas nativas de Windows.

![](posts/introduccion-a-xamarin/5.png)

<figcaption>Xamarin.Forms — Cross Platform UI</figcaption>

#### Más recursos

Si querés avanzar desarrollando con Xamarin, te recomiendo que leas la documentación oficial que esta muy completa y tiene muchos ejemplos.

[%card](https://docs.microsoft.com/es-es/xamarin/cross-platform/get-started/)
