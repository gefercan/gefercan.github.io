// JavaScript Document




window.onload=function(){ 
	
	function cover(){
		var e = document.getElementById("enter");
			
	
			function hide1(){
				var a = document.getElementById("cover");

				a.style.display = ("none");
			}

		
		e.addEventListener("click", hide1 );

		}

		cover();


function myFunction(){

/*------------------definition of menu -----------------------------------*/	
	
	function menus(){
		
		function menuhide(){
		var o = document.getElementById("sidemenu_container");
		var oo = document.getElementById("menu");
		var ooo = document.getElementById("name");
		var j1 = document.getElementById("image");
	
		/*---------layout changes----------------------------*/
		o.style.top =("-150%");
		o.style.zIndex =("3");
		o.style.opacity=("0.5");
		o.style.transition=("0.5s");
		oo.removeEventListener("click",menuhide);
		oo.addEventListener("click",menushow);
		oo.style.opacity = ("0.7");
		oo.style.color=("#FFFFFF");
		ooo.style.opacity = ("0.5");
		oo.innerHTML=("//+/options/");
		j1.style.filter=("brightness(50%)");
	}
	
		
		
	function menushow(){
		var o = document.getElementById("sidemenu_container");
		var oo = document.getElementById("menu");
		var ooo = document.getElementById("name");
		var j1 = document.getElementById("image");

		/*---------layout changes----------------------------*/
		o.style.top =("100%");
		o.style.opacity=("0.8");
		o.style.zIndex =("9");
		o.style.transition=("0.9s");
		o.style.borderRadius=("50px");
		oo.removeEventListener("click",menushow);
		oo.addEventListener("click",menuhide);
		oo.innerHTML=("//x/options/");
		oo.style.zIndex =("3");
		oo.style.color=("#030303");
		oo.style.opacity = ("0.9");
		ooo.style.opacity = ("0.8");
		oo.style.color= ("white");
		ooo.style.opacity= ("1");
		j1.style.filter=("brightness(100%)");
		j1.style.opacity=("1");
		menuhide2();
	}	

	function menustart(){
		var oo = document.getElementById("menu");
		oo.addEventListener("click",menushow);
		}
		
	menustart();
		
	function menushow2(){
		var o = document.getElementById("sidemenu_bottom");
		var oo = document.getElementById("menu_bottom");
		var ooo = document.getElementById("name");
		var j1 = document.getElementById("image");
		/*---------layout changes----------------------------*/
		o.style.bottom=("10%");
		o.style.opacity=("1");
		o.style.zIndex =("9");
		o.style.transition=("0.6s");
		o.style.borderRadius=("50px");
		oo.removeEventListener("click",menushow2);
		oo.addEventListener("click",menuhide2);
		oo.innerHTML=("//x/options/");
		oo.style.zIndex =("3");
		oo.style.color=("#030303");
		oo.style.opacity = ("0.9");
		ooo.style.opacity = ("0.8");
		oo.style.color= ("white");
		ooo.style.opacity= ("1");
		j1.style.filter=("brightness(100%)");
		j1.style.opacity=("1");
		menuhide();
	}
				
	function menuhide2(){
		var o = document.getElementById("sidemenu_bottom");
		var oo = document.getElementById("menu_bottom");
		var ooo = document.getElementById("name");
		var j1 = document.getElementById("image");

		/*---------layout changes----------------------------*/
		o.style.bottom =("-150%");
		o.style.zIndex =("3");
		o.style.opacity=("0.5");
		o.style.transition=("0.5s");
		oo.removeEventListener("click",menuhide2);
		oo.addEventListener("click",menushow2);
		oo.style.opacity = ("0.7");
		oo.style.color=("#FFFFFF");
		ooo.style.opacity = ("0.5");
		oo.innerHTML=("//+/options/");
		j1.style.filter=("brightness(50%)");
	}
		
	function menustart2(){
		var oo = document.getElementById("menu_bottom");
		oo.addEventListener("click",menushow2);
		
	}
	
	menustart2();
}
	

	
	loading11 (a1,hover1);
	loading11 (b1,hover2);
	loading11 (c1,hover3);
	loading11 (d1,hover4);
	loading11 (e1,hover5);
	loading11 (g1,hover6);
	loading11 (h1,hover7);
	loading11 (i1,hover8);
	
	menus();

		

}
	
	
myFunction();
}


















/*
the plan is the next
for mobile
first will appear the cover, a div, styled simply, arial and black text over white or gray background,
with the title, aim of the work and technical details
when you click, it dissapear-an event listener on this div to change the css display from block to none will suffice.

___________________________________



La cortina medio descorrida,
al amanecer, devela poco a poco el escenario
Las almohadas blancas, desordenadas.
Tibias de calor de jornada.
Tu sonrisa y el tiempo, acompasados, dormidos. 





_____________________________________________________

May 30, 2012
La bruma
I
 Y en mis anios de demencia/
cuando en medio del olvido/
sumergido de este mundo en la nostalgia/
 tu,que ahora te has ido,/
 tu vuelvas a estar conmigo/

 II
 Conmigo entre las brumas,/
 escaparate de los suenios/
 apareciendote en las madrugadas/
haciendo lo que haciamos/
como si no pasara nada/

 III
 Volvere a ver tu imagen/
 de mirada voluntariosa/
estare una vez mas cautivado/
 por aquella voluntad/
por aquella sinrazon/
de quererte siempre amar/

 IV

 Sera entonces que me dominara tu mirada/
que es mi verdadero fin y ultima morada/
sera entonces que tu rostro/
sera a mis ojos/
no mas ya un recuerdo/ ni debil remembranza/

 V

 y podremos hablar de nuevo/
y podre interrogarte cada maniana/

 tan fugaz.

_____________________________________________________

Solo veia el brillar.
Las miles de lentejuelas que se arrastraban masivamente a sus faldas no solo tintineaban, destellaban, salpicantes en lentos y rapidos movimientos, acompasados, suaves, delgados, como los quebradizos encajes que asus alredores pililaban, filigranescos, dorados, espejuelos en quebrados movimientos: y vi su rostro, cubierto entre aretes multiformes de delicada figura y silueta graciosa, bamboleantes alrededor de la coronada cabeza rellena de colgantes lunas, azules, zafires y violetas, tornasoles. Gira, gira! gira, gira! todos ellos vidriosos, transparentes, brillantes, enpezaron a zarandearse... 

Un mantel largo puede ser, en una larga tarde veraniega tan larga como su faz, la extension de nuestros pensamientos, que es la de nuestros multiples y variadas soledades coloridas y grises tantas veces, de tantos modos. Si en verdad puede serlo, murmuraba calladamente en el acariciar regodeante que circulaba el borde brilloso de la tasa media llena pero tal vez y tambien o a lo mejor media vacia. Puede ser, y la cuchara descansa perdida de si misma y de las agotadoras cucharadas de azucar recostada a la sombra en el plato; tintineam porque bosteza y vuelve a trabajar porque al fin y al cabo ni umporta que se pierda entre las azucareras, teteras y floreros, creadores de siluetas en le facnmtastico orden de las sombras, develar inconcluso de identidades, refugio de ambiguedad,solaz de doblez, seol de claridad, orden donde tambien ella se incorpora,leve, suave pero continuamente sin que nadie lo pudiera evitar, ya que ni en la sala ni en el comedor, ya en el cuarto ni en el patio habia quien quisieralo hacer, ya que por no decir ni que en la mesa misma donde ella reclinaba la resignacion, sentando un perfil en graciosa silla porque no supiera, no pudiera,o no quisiera, la costumbre de su calma, su tedio incorrupto, de bastedad pulida, esa que antecede a la elaborada y compleja decadencia, repleta de sutileza, de la cual tambien es uno de los extremos en el ocio demiurgico, creador indiscriminado de lo qie se llama bueno y que se dice malo, del asco y del orgasmo, del arte y del crimen, inicio del hombre que ella cultivaba en aquellos tiempos de minuto, minuto largo que penetra en otra dimension de la profundidad rapida del no tiempo que es el transfuga compaginar que alberga el vestibulo inmediato de la ultima puerta y al verla avizorarla, referirla, intuirla i tabn solo sentirla se le revelo instantaneala gran distancia que cubria su mas reciente salida a Babilonia, la iniversal, la entranuable, la de siempre, saturada y henchida de rostros y de voces toda ella carnavalesca y dionisiaca ¿si seria de ella la sombra que languidecia en la cama, tragandose a si misma de los ambitos de la casa? 

Hay algunas avenidas que estando inmersas en la ciudad, parecieran le dieran a esta la espalda, abiertas al cielo, circulan por entre las zonas olvidadas de la urbe: era una de estas avenidas por donde circulaba ahora la unidad movil delperiodico, rumbo a una nueva comision, y desde ella, S contemplaba lo gris que pueden ser algunos barrios a determinadas horas del alba, que temprano era aun para el trajinar de la ciudad, hacia frio y corria viento, pero S mantenia la ventana abierta para que el aire, qie fistigaba su rostro de manera impenitente, le distrajera de los rezagos del mareo de la maniana. Preocupado por su apariencia, no siempre muy cuidada por otraparte, ausculto el espejo retrovisor: lucia alli algo demacrado, pero no mucho mas de lo que una mala noche cualquiera pudiera provocar: las ojeras, algunas arrugas, un rostro de desgano, poco menos, poco mas.
La madrugada habia empezado como siempre, sin querer y a la obligada, sacandolo al lavatorio, empujandolo a mirarse frente al espejo, otra vez y una vez mas, su rostro, languida y entorpecidamente. Amodorradam su cara permanecia freente a el, hasta la alteridad-como9 cuando uno examina una pàlabra, cualquiera, por ejemplo: elefante y la examina por sus cuatro costados, repetidamente, en su anatomia, su forma, su construccion: e,l,e, ¿e?,f,an,te, ele,efe,an,n,(!n!), hsta sentirla una completa desconocida, dotada de un natural absurdo o de un coherente absurdo (segun se quiera); asi miraba, esa, su imagen, como si ni su mirada (donde se avista el alma o la real persona)le perteneciera y el espejo la robase. Hasta quien sabe, se vio, o mas bien, se sintio al reflejo, algo antipatico; llegado a este punto detuvo su discurrir y penso que tenia que comenzar a afeitarse: primero la mejilla izquierda...ya esta. 
_____________________________________________________
Tarde en la batalla
el tronar de las trompetas 
la ciudad ya esta despierta
las campanas 
almidonadas 
ululantes se reclinan 
y dejan sus siluetas sumergirse en el barullo 
de las heridas abiertas 
y del camino nocturno 
_____________________________________________________

En la oscuridad, en la lejania, tras las rocas, tras las selvas.
En la oscuridad, en el frio.
En el temor y en el miedo.
Esperando.
Sumergido en las pesadillas, navegando los lamentos.
Aciago, quedo.
Su rostro perdido y reflejado.
Sus brazos, torcidos y quemados.
Caminante liberado
de herrumbre y vituperio.
Descansado guerrero
Sobreviviente eterno de la noche 



I

Back to the river where all we came from
the life runs, the time walks
that's not new
its just like nothing
so just like you
Its waters are tumultuously
smiling with a crowded face
far away from any age
a coloured urban depression
just a little sad lost connection
Going back to the river
where all we came from

Long faces all around
running fast as our remembrances allow
the night has come and the day has gone
and our life with that all
Cartels, lights, sounds and
all nothing but long in the time
The gray tale has no happy end
and has no form
We wake up and realize that we must return
Back to the river where all we came from

II

Unhidden holes
ruins showcased as new
the broken buildings these are
submerged in the thousand shadows
were the lights are turned off
somewhere along the main street
spurious tales of the nights
Were the proud hero sell his honor
were the villains maintain theirs
rising and crying no more

The dreams had taken a rotten route
and your face will take that for true
then your bones will be there
as now is your flesh
and nothing more
when you come back
to the river where all we came from

III
The hand that sew that line
the fabric where this has been engraved
the long story
the short life
where do you thing all came from?
is it real? is it right?
there is no reason to take it for
as you did when you found
the singer in the roof
the musician in your front door
Stay, and that said
sing a song of something wong
tell how to do well and yell
after and then, after and then, after and then,
and then,
right and now. 

las brisas que tu piel descaman, 
que las guedejas de tu rubio pelo traspasan,
hoy al sol del mediodia,
tan abierto, 
tan de maravilla 



time has allowed us to be like flowers in the summer


time has allowed us to be like flowers in the summer
and like they, soon all we will be gone 
Otra historia un pequeno pueblo un hijo ilustre de este pueblo muerto hace tiempo en un siglo pasado la memoria de este hijo(a) ilustre pervive en este lugar orgulloso de este pueblo-ciudad en este pueblo un admirador de este hijo ilustre vive idealizando a este y a su vida ya su tiempo y alli evade su destino a traves de otro de estar en un pueblo pequenio
Un dia un documento es descubierto y pertenecea este hijo ilustre sabes lo que eso significa? el admirador trata de recolectar fondos debe tenerlo a toda costa para su pueblo para comprarlo mueve gente convence inversores, allana masas, colecta monedas pequenias de muchas esperanzas lo logra solo para descubeie que era una falsificacion 


Entre las delgadas esperanzas de mi presente te busque, tambien a ti, como antes busque a otras, aunque cada una por alguna razon distinta; por sus dialogos, por su silueta, por su mirada, por su alegria, por su sonrisa, por su malicia. Con negada audacia te busque, deseando que mi obtusa naturaleza se transformase a tu solo contacto. Las nubes asolan con su rumor tremendo el horizonte, murmurando presagios. La tierra se inclina y nerviosa palpita, aligerando el peso de mis inseguridades. Ya no hay imagen tuya en el aire al que me enfrento.Te busque a ti.
Cuando las montanas solidas de Muscat ocultaban entre sus brazos la ciudad fragmentada, te aniore, entre las areniscas gamas de aquel paisaje lejano y provinciano, entre el silencio de aquellas noches tranquilas; como tambien entre las florestas desordenadas e invasoras y en los templos multitudinarios de voces confusas, cuando me vi perdido, cuando me vi lejano, pense en la posibilidad,a mis ojos extrabia,de que fuera dable, el que no te pudiera volver a ver, y rogue desesperadamente que ello no fuera posible.
Shiraz. Nombre fabuloso, nombre mitologico, nombre sin rostro, nombre literario, nombre sin materia, palabra sin fondo, palacio persa, algun lugar retratado en alguna miniatura de esas que reproducen indistintamente los libros de historia, nombre de jardines rojos y flores doradas de miniaturista, nombre de leones rampantes y corceles blanquiazules, nombre de letras escritas delgadamente, en caracteres extrabios a mis ojos, durante mil noches y una noche. Lugar lejano, tan proximo como el reino del preste Juan, y una shirazi, alguien tan familiar como los personajes de baudolino. Un nombre.
Y hoy, que aquella pesadilla se ha vuelto realidad y ya no compartimos la misma ciudad, no se que hacer sin ti.
Hoy ya la luna se ha ocultado y el suave recuerdo que deja entre las dispersas nubes heladas ya no es mas tangible, como pudo ser tu amor pasajero.
Hoy, hoy ya no hay mas voz delicada en el silencio, ni mas abrazanme el marfil de los brazos del desierto, ni ya la negrura de mi destino reflejada en tus ojos aplaca mi temor del horizonte, perdidos ya, sus pasos, sus vestigios, sus memorias, y hasta olvidado esta su olvido, ya no mas el cabello, derramados entre mis manos, ya no mas imagen, ya no mas rosa del desierto.

Solo vacio, y mas vacio.
No hay nada alli. Adentro.
No estamos tristes. Adios. Adios?. 


*/
