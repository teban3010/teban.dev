---
slug: construyendo-una-aplicacion-en-xamarin-forms
date: 2018-07-07T00:00:00.000Z
title: 'Construyendo una aplicación en Xamarin.Forms'
template: 'post'
draft: false
description: 'En este post vamos a ver los conceptos básicos para construir nuestra primera aplicación en Xamarin.Forms, para ver como aplicarlos prácticamente, te invito a pasar por el siguiente repositorio de…'
category: ''
tags: [Xamarin, Xamarin Forms, Xamarin Development, Xamarin App Development]
collection: 'blog'
---

![](construyendo-una-aplicacion-en-xamarin-forms/0.png)

En este post vamos a ver los conceptos básicos para construir nuestra primera aplicación en Xamarin.Forms, para ver como aplicarlos prácticamente, te invito a pasar por el siguiente repositorio de Github que te explica paso a paso como construir una aplicación:

[%card](https://github.com/Xamarin-Espanol/XamarinAssemble)

Si aún no sabes lo que es Xamarin y llegaste acá, te invito a pasar por mi otro post:

[%card](https://www.teban.dev/post/introduccion-a-xamarin/)

#### DataBinding

**¿Qué es DataBinding?**

DataBinding es la técnica de vincular las propiedades de dos objetos para que los cambios en una propiedad se reflejan automáticamente en la otra propiedad. Enlace de datos es una parte integral de la arquitectura de aplicación Model-View-ViewModel (MVVM).

**¿Como implemento DataBinding en Xamarin.Forms?**

Hay una serie de pasos que tenemos que seguir y desarrollar para utilizar DataBinding en Xamarin.Forms. Primero, tenemos que implementar la interfaz `INotifyPropertyChanged`. Personalmente, recomiendo tener esta implementación en un `BaseViewModel` junto con una propiedad que sea `IsBusy` la cual vamos a utilizar seguido en la mayoría de los ViewModels. Esta implementación se realiza de la siguiente manera:

```csharp
public class BaseViewModel : INotifyPropertyChanged
{
    private bool _isBusy;
    public bool IsBusy
    {
        get { return _isBusy; }
        set { if (_isBusy == value) return; _isBusy = value; OnPropertyChanged(nameof(IsBusy)); }
    }

    #region INotifyPropertyChanged Implementation

    public event PropertyChangedEventHandler PropertyChanged;

    protected void OnPropertyChanged([CallerMemberName] string propertyName = "")
    {
        if (PropertyChanged == null)
            return;

        PropertyChanged.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }

    #endregion
}
```

Hay dos cosas que debemos destacar del código que estamos viendo. Primero, la implementación de `INotifyPropertyChanged` consta de un `EventHandler` y el método `OnPropertyChanged`. Este método es el que tenemos que invocar cuando seteamos el valor de una variable, y esto es lo segundo que destacamos. Para utilizarlo vamos a necesitar una variable privada, que es quien se encarga de almacenar el valor, y una publica que devuelve el valor de la variable privada, y además notifica el cambio al setearla. Para continuar mostrando como utilizar y como fuciona DataBinding, vamos a utilizar el siguiente ViewModel:

```csharp
public class TextViewModel : BaseViewModel
{
    private bool _text;
    public bool Text
    {
        get { return _text; }
        set { if (_text == value) return; _text = value; OnPropertyChanged(nameof(Text)); }
    }
}
```

El siguiente paso que vamos a realizar es avisarle a la vista cuál es el modelo de datos que vamos a utilizar. Para esto vamos a asignarle el `TextViewModel` al atributo `BindingContext` del `ContentPage`, desde code behind, como lo vemos a continuación:

```csharp
[XamlCompilation(XamlCompilationOptions.Compile)]
public partial class TextPage : ContentPage
{
    TextViewModel ViewModel;

    public LoginPage()
    {
        InitializeComponent();

        ViewModel = new TextViewModel();
        BindingContext = ViewModel;
    }
}
```

Por último, desde la vista, utilizando el atributo `Binding` podemos decir cuál es la propiedad que estamos escuchando, como se muestra a continuación:

De esta forma, cada vez que cambiemos el valor del Entry, se va a actualizar el valor que tenga el Label.

#### Dependency Service

**¿Qué es Dependency Service?**

Usando Xamarin.Forms nos vamos a encontrar con situaciones en las que debemos definir el comportamiento de los proyectos para plataformas específicas. Dependency Service encuentra la implementación correcta de la plataforma, permitiendo que desde el código compartido tengamos acceso a la funcionalidad nativa.

**¿Cómo utilizo Dependency Service?**

Para poder utilizar Dependency Service vamos a necesitar cuatro componentes:

- **Interfaz**
- **Implementación por plataforma**
- **Registro**
- **La llamada a DependencyService** — comparten el código debe llamar explícitamente a `DependencyService` para solicitar las implementaciones de la interfaz.

Lo primero que necesitamos es definir una interfaz con la funcionalidad requerida, para esto, vamos a utilizar el ejemplo de Text to speech sólo para iOS. Entonces, desde el proyecto compartido, definimos la interfaz `ITextToSpeech` como se muestra a continuación:

```csharp
public interface ITextToSpeech {
    void Speak ( string text );
}
```

El próximo paso es implementar la interfaz en cada plataforma. Como dije anteriormente, para este ejemplo utilizaremos solo iOS, desde el proyecto de iOS colocaremos la siguiente implementación:

```csharp
namespace UsingDependencyService.iOS
{
    public class TextToSpeech_iOS : ITextToSpeech
    {
        public void Speak (string text)
        {
            var speechSynthesizer = new AVSpeechSynthesizer ();

            var speechUtterance = new AVSpeechUtterance (text) {
                Rate = AVSpeechUtterance.MaximumSpeechRate/4,
                Voice = AVSpeechSynthesisVoice.FromLanguage ("en-US"),
                Volume = 0.5f,
                PitchMultiplier = 1.0f
            };

            speechSynthesizer.SpeakUtterance (speechUtterance);
        }
    }
}
```

A continuación, registramos la implementación con DependencyService. Para hacer esto, simplemente debemos asignarle un atributo de metadato y DependencyService se va a encargar de buscar la implementación correcta a la plataforma en tiempo de ejecución. El metadato a agregar es el siguiente:

```csharp
[assembly: Dependency (typeof (TextToSpeech_iOS))]
namespace UsingDependencyService.iOS
{
  ...
}
```

Luego, desde el archivo `App.xaml.cs` vamos a registrar manualmente cada servicio de dependencia definida en el proyecto iOS con el método`Register<T>` tal y como se muestra a continuación:

```csharp
...
Xamarin.Forms.Forms.Init(e, assembliesToInclude);
// register the dependencies in the same
Xamarin.Forms.DependencyService.Register();
...
```

Por último, desde el código compartido debemos llamar explícitamente a `DependencyService` para pedirle la implementación de la interfaz. Esto lo hacemos como se muestra a continuación:

```csharp
DependencyService.Get().Speak("Hello from Xamarin Forms");
```

#### Custom Renderers

**¿Qué son los custom renderers?**

Las interfaces de usuario de Xamarin.Forms se representan mediante los controles nativos de la plataforma de destino, lo que permite a las aplicaciones conservar la apariencia y comportamiento adecuada para cada plataforma. Los Custom Renderers permiten reemplazar este proceso para personalizar la apariencia y comportamiento de los controles en cada plataforma.

**¿Cómo uso custom renderers?**

Vamos a realizar una customización de un `Entry`, para esto, lo primero que vamos a hacer desde código compartido es crear una clase que herede de `Entry` como se muestra a continuación:

```csharp
public class MyEntry : Entry
{
}
```

Luego consumimos este `Entry` desde una vista. Para esto debemos agregar un namespace en la vista y luego utilizarlo como se muestra a continuación:

```csharp
 ...
    ...
```

Por último, generamos el Renderer desde cada plataforma en particular. A continuación veremos la implementación para iOS:

```csharp
[assembly: ExportRenderer (typeof(MyEntry), typeof(MyEntryRenderer))]
namespace CustomRenderer.iOS
{
    public class MyEntryRenderer : EntryRenderer
    {
        protected override void OnElementChanged (ElementChangedEventArgs e)
        {
            base.OnElementChanged (e);

            if (Control != null) {
                // do whatever you want to the UITextField here!
                Control.BackgroundColor = UIColor.FromRGB (204, 153, 255);
                Control.BorderStyle = UITextBorderStyle.Line;
            }
        }
    }
}
```

Y para Android la implementación es la siguiente:

```csharp
[assembly: ExportRenderer(typeof(MyEntry), typeof(MyEntryRenderer))]
namespace CustomRenderer.Android
{
    class MyEntryRenderer : EntryRenderer
    {
        public MyEntryRenderer(Context context) : base(context)
        {
        }

        protected override void OnElementChanged(ElementChangedEventArgs e)
        {
            base.OnElementChanged(e);

            if (Control != null)
            {
                Control.SetBackgroundColor(global::Android.Graphics.Color.LightGreen);
            }
        }
    }
}
```

En ambos casos lo que estamos realizando es cambiar el background del componente para que se vea como a continuación:

![](construyendo-una-aplicacion-en-xamarin-forms/1.png)

Para que al ejecutar la aplicación se renderice customizada, solo tenemos que agregar el metadato `ExportRenderer` e indicarle cuál es el componente al cual estamos customizando.

#### Más recursos

Para aprender más recomiendo ver la documentación oficial:

[%card](https://docs.microsoft.com/es-es/xamarin/xamarin-forms/)
