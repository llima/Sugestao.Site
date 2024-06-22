$(document).ready(function() {

	/*mobile menu*/
	jQuery(".btnHamb").on( "click", function() {
	    var menuStatus = jQuery(".menuHamb").css("display");
	    if(menuStatus == "none"){
	        jQuery(".menuHamb").css("display","block");
	    }
	    	else{jQuery(".menuHamb").css("display","none");}    
	});
    

	/*scroll btn*/
	jQuery(".btn-page-backtop").on( "click", function() {window.scrollTo(0, 0);} );


	/*tabs servicos*/
	jQuery("a#btn-sessaoServico01").on( "click", function() {
	    jQuery(this).css({'color' : 'rgba(75, 75, 75, 1)','font-weight' : '600',});
	    jQuery("a#btn-sessaoServico02, a#btn-sessaoServico03").css({'color' : 'rgba(160, 160, 160, 1)','font-weight' : '500',});
	    jQuery(".page-sessaoServico02, .page-sessaoServico03").css("display","none");jQuery(".page-sessaoServico01").css("display","flex");
	} );
	jQuery("a#btn-sessaoServico02").on( "click", function() {
		jQuery(this).css({'color' : 'rgba(75, 75, 75, 1)','font-weight' : '600',});
		jQuery("a#btn-sessaoServico01, a#btn-sessaoServico03").css({'color' : 'rgba(160, 160, 160, 1)','font-weight' : '500',});
	    jQuery(".page-sessaoServico01, .page-sessaoServico03").css("display","none");jQuery(".page-sessaoServico02").css("display","flex");
	} );
	jQuery("a#btn-sessaoServico03").on( "click", function() {
	    jQuery(this).css({'color' : 'rgba(75, 75, 75, 1)','font-weight' : '600',});
	    jQuery("a#btn-sessaoServico01, a#btn-sessaoServico02").css({'color' : 'rgba(160, 160, 160, 1)','font-weight' : '500',});
	    jQuery(".page-sessaoServico01, .page-sessaoServico02").css("display","none");jQuery(".page-sessaoServico03").css("display","flex");
	} );


	/*FAQ*/
	jQuery("#pergunta-01 .btn-perguntasfrequentes-plus").on( "click", function() {
	    jQuery("#pergunta-desc01").css("display","flex");
	    jQuery("#pergunta-01 .btn-perguntasfrequentes-minus").css("display","block");
	    jQuery("#pergunta-01 .btn-perguntasfrequentes-plus").css("display","none");
	} );
	jQuery("#pergunta-01 .btn-perguntasfrequentes-minus").on( "click", function() {
	    jQuery("#pergunta-desc01").css("display","none");
	    jQuery("#pergunta-01 .btn-perguntasfrequentes-minus").css("display","none");
	    jQuery("#pergunta-01 .btn-perguntasfrequentes-plus").css("display","block");
	} );

	jQuery("#pergunta-02 .btn-perguntasfrequentes-plus").on( "click", function() {
	    jQuery("#pergunta-desc02").css("display","flex");
	    jQuery("#pergunta-02 .btn-perguntasfrequentes-minus").css("display","block");
	    jQuery("#pergunta-02 .btn-perguntasfrequentes-plus").css("display","none");
	} );
	jQuery("#pergunta-02 .btn-perguntasfrequentes-minus").on( "click", function() {
	    jQuery("#pergunta-desc02").css("display","none");
	    jQuery("#pergunta-02 .btn-perguntasfrequentes-minus").css("display","none");
	    jQuery("#pergunta-02 .btn-perguntasfrequentes-plus").css("display","block");
	} );

	jQuery("#pergunta-03 .btn-perguntasfrequentes-plus").on( "click", function() {
	    jQuery("#pergunta-desc03").css("display","flex");
	    jQuery("#pergunta-03 .btn-perguntasfrequentes-minus").css("display","block");
	    jQuery("#pergunta-03 .btn-perguntasfrequentes-plus").css("display","none");
	} );
	jQuery("#pergunta-03 .btn-perguntasfrequentes-minus").on( "click", function() {
	    jQuery("#pergunta-desc03").css("display","none");
	    jQuery("#pergunta-03 .btn-perguntasfrequentes-minus").css("display","none");
	    jQuery("#pergunta-03 .btn-perguntasfrequentes-plus").css("display","block");
	} );

	jQuery("#pergunta-04 .btn-perguntasfrequentes-plus").on( "click", function() {
	    jQuery("#pergunta-desc04").css("display","flex");
	    jQuery("#pergunta-04 .btn-perguntasfrequentes-minus").css("display","block");
	    jQuery("#pergunta-04 .btn-perguntasfrequentes-plus").css("display","none");
	} );
	jQuery("#pergunta-04 .btn-perguntasfrequentes-minus").on( "click", function() {
	    jQuery("#pergunta-desc04").css("display","none");
	    jQuery("#pergunta-04 .btn-perguntasfrequentes-minus").css("display","none");
	    jQuery("#pergunta-04 .btn-perguntasfrequentes-plus").css("display","block");
	} );

	jQuery("#pergunta-05 .btn-perguntasfrequentes-plus").on( "click", function() {
	    jQuery("#pergunta-desc05").css("display","flex");
	    jQuery("#pergunta-05 .btn-perguntasfrequentes-minus").css("display","block");
	    jQuery("#pergunta-05 .btn-perguntasfrequentes-plus").css("display","none");
	} );
	jQuery("#pergunta-05 .btn-perguntasfrequentes-minus").on( "click", function() {
	    jQuery("#pergunta-desc05").css("display","none");
	    jQuery("#pergunta-05 .btn-perguntasfrequentes-minus").css("display","none");
	    jQuery("#pergunta-05 .btn-perguntasfrequentes-plus").css("display","block");
	} );

















});
/*end document*/



