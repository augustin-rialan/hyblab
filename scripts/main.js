const ws = new WebSlides({
    autoslide: false,
    changeOnClick: false,
    loop: false,
});

dataDGFHab = [
    {
      "Nomdelacommune": "ARZON",
      "DGFhabitant": 164.04,
      "DGFhabitantRapporte": 64.04
    },
    {
      "Nomdelacommune": "DAMGAN",
      "DGFhabitant": 190.8,
      "DGFhabitantRapporte": 90.8
    },
    {
      "Nomdelacommune": "SAINT-GILDAS-DE-RHUYS",
      "DGFhabitant": 93.73,
      "DGFhabitantRapporte": -6.27
    },
    {
      "Nomdelacommune": "PENESTIN",
      "DGFhabitant": 197.39,
      "DGFhabitantRapporte": 97.39
    },
    {
      "Nomdelacommune": "CARNAC",
      "DGFhabitant": 100.57,
      "DGFhabitantRapporte": 0.57
    },
    {
      "Nomdelacommune": "SAINT-PIERRE-QUIBERON",
      "DGFhabitant": 125.66,
      "DGFhabitantRapporte": 25.66
    },
    {
      "Nomdelacommune": "QUIBERON",
      "DGFhabitant": 180.98,
      "DGFhabitantRapporte": 80.98
    },
    {
      "Nomdelacommune": "TRINITE-SUR-MER",
      "DGFhabitant": 113.64,
      "DGFhabitantRapporte": 13.64
    },
    {
      "Nomdelacommune": "SAINT-CAST-LE-GUILDO",
      "DGFhabitant": 214.22,
      "DGFhabitantRapporte": 114.22
    },
    {
      "Nomdelacommune": "SAINT-BRIAC-SUR-MER",
      "DGFhabitant": 112.85,
      "DGFhabitantRapporte": 12.85
    },
    {
      "Nomdelacommune": "BANGOR",
      "DGFhabitant": 241.69,
      "DGFhabitantRapporte": 141.69
    },
    {
      "Nomdelacommune": "SAINT-PHILIBERT",
      "DGFhabitant": 45.64,
      "DGFhabitantRapporte": -54.36
    },
    {
      "Nomdelacommune": "SARZEAU",
      "DGFhabitant": 107.69,
      "DGFhabitantRapporte": 7.69
    },
    {
      "Nomdelacommune": "LANCIEUX",
      "DGFhabitant": 150.7,
      "DGFhabitantRapporte": 50.7
    },
    {
      "Nomdelacommune": "SAUZON",
      "DGFhabitant": 210.18,
      "DGFhabitantRapporte": 110.18
    },
    {
      "Nomdelacommune": "FREHEL",
      "DGFhabitant": 115.17,
      "DGFhabitantRapporte": 15.17
    },
    {
      "Nomdelacommune": "ERQUY",
      "DGFhabitant": 183.79,
      "DGFhabitantRapporte": 83.79
    },
    {
      "Nomdelacommune": "LOCMARIAQUER",
      "DGFhabitant": 81.73,
      "DGFhabitantRapporte": -18.27
    },
    {
      "Nomdelacommune": "SAINT-LUNAIRE",
      "DGFhabitant": 66,
      "DGFhabitantRapporte": -34
    },
    {
      "Nomdelacommune": "PLENEUF-VAL-ANDRE",
      "DGFhabitant": 178,
      "DGFhabitantRapporte": 78
    }
  ]
	
  datatoPrint = [];
  labelToPrint = [];
  mediane = [];
  color = [];
  colorMediane = [];
    $.each(dataDGFHab, function(i, value){
        datatoPrint.push(value.DGFhabitant);
        labelToPrint.push(value.Nomdelacommune)
        color.push('rgba(0, 159, 227, 1)')
        colorMediane.push('rgba(227, 6, 19, 1)')
        mediane.push(100)
  });

  data2 = {
      datasets: [{
          data: datatoPrint,
          label: 'Dotation par habitant pour les vingts communes ou la part des résidents secondaires est la plus élevée', //TODO
          backgroundColor: color,
          borderColor:color,
          borderWidth: 1,
          order:0
      },{
        label: 'Médiane des communes bretonnes', //TODO
        data: mediane,
        borderColor: colorMediane,
        order:1,

        // Changes this dataset to become a line
        type: 'line'
    }],
      labels: labelToPrint,
  
      // 227 6 19
      // 0 159 227
      // 255 237 0
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      
  };
  options= {
    title: {
        display: true,
        fontSize: 20,
        text: 'Des dotations basées sur la population saisonnière '//TODO
    },
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }
}
    var ctx = document.getElementById("barDGF");
    console.log(data2);
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data2,
        options: options
    });


    dataEffort = [
        {
          "Nomdelacommune": "ARZON",
          "Effortfiscal": 84.16834096,
          "Effortfiscalrapporté": -15.83165904
        },
        {
          "Nomdelacommune": "DAMGAN",
          "Effortfiscal": 77.57554892,
          "Effortfiscalrapporté": -22.42445108
        },
        {
          "Nomdelacommune": "SAINT-GILDAS-DE-RHUYS",
          "Effortfiscal": 72.70484236,
          "Effortfiscalrapporté": -27.29515764
        },
        {
          "Nomdelacommune": "PENESTIN",
          "Effortfiscal": 77.87897785,
          "Effortfiscalrapporté": -22.12102215
        },
        {
          "Nomdelacommune": "CARNAC",
          "Effortfiscal": 79.84180245,
          "Effortfiscalrapporté": -20.15819755
        },
        {
          "Nomdelacommune": "SAINT-PIERRE-QUIBERON",
          "Effortfiscal": 65.86300394,
          "Effortfiscalrapporté": -34.13699606
        },
        {
          "Nomdelacommune": "QUIBERON",
          "Effortfiscal": 68.13508111,
          "Effortfiscalrapporté": -31.86491889
        },
        {
          "Nomdelacommune": "TRINITE-SUR-MER",
          "Effortfiscal": 73.19282938,
          "Effortfiscalrapporté": -26.80717062
        },
        {
          "Nomdelacommune": "SAINT-CAST-LE-GUILDO",
          "Effortfiscal": 116.5699771,
          "Effortfiscalrapporté": 16.56997707
        },
        {
          "Nomdelacommune": "SAINT-BRIAC-SUR-MER",
          "Effortfiscal": 74.05190236,
          "Effortfiscalrapporté": -25.94809764
        },
        {
          "Nomdelacommune": "BANGOR",
          "Effortfiscal": 109.1202531,
          "Effortfiscalrapporté": 9.120253089
        },
        {
          "Nomdelacommune": "SAINT-PHILIBERT",
          "Effortfiscal": 68.75067443,
          "Effortfiscalrapporté": -31.24932557
        },
        {
          "Nomdelacommune": "SARZEAU",
          "Effortfiscal": 91.2797798,
          "Effortfiscalrapporté": -8.720220202
        },
        {
          "Nomdelacommune": "LANCIEUX",
          "Effortfiscal": 80.24508973,
          "Effortfiscalrapporté": -19.75491027
        },
        {
          "Nomdelacommune": "SAUZON",
          "Effortfiscal": 111.5099165,
          "Effortfiscalrapporté": 11.50991646
        },
        {
          "Nomdelacommune": "FREHEL",
          "Effortfiscal": 97.09845554,
          "Effortfiscalrapporté": -2.901544464
        },
        {
          "Nomdelacommune": "ERQUY",
          "Effortfiscal": 106.0741453,
          "Effortfiscalrapporté": 6.074145252
        },
        {
          "Nomdelacommune": "LOCMARIAQUER",
          "Effortfiscal": 78.85349598,
          "Effortfiscalrapporté": -21.14650402
        },
        {
          "Nomdelacommune": "SAINT-LUNAIRE",
          "Effortfiscal": 77.12036271,
          "Effortfiscalrapporté": -22.87963729
        },
        {
          "Nomdelacommune": "PLENEUF-VAL-ANDRE",
          "Effortfiscal": 110.06925,
          "Effortfiscalrapporté": 10.06924997
        }
      ]

    datatoPrint = [];
    labelToPrint = [];
    mediane = [];
    color = [];
    colorMediane = [];
      $.each(dataEffort, function(i, value){
          datatoPrint.push(value.Effortfiscal);
          labelToPrint.push(value.Nomdelacommune)
          color.push('rgba(0, 159, 227, 1)')
          colorMediane.push('rgba(227, 6, 19, 1)')
          mediane.push(100)
    });
  
    data2 = {
        datasets: [{
            data: datatoPrint,
            label: 'Effort fiscal pour les vingts communes ou la part des résidents secondaires est la plus élevée            ', //TODO
            backgroundColor: color,
            borderColor:color,
            borderWidth: 1,
            order:0
        },{
          label: 'Médiane des communes bretonnes', //TODO
          data: mediane,
          borderColor: colorMediane,
          order:1,
  
          // Changes this dataset to become a line
          type: 'line'
      }],
        labels: labelToPrint,
    
        // 227 6 19
        // 0 159 227
        // 255 237 0
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        
    };
    options= {
        title: {
            display: true,
            fontSize: 20,
            text: 'Plus de recettes, moins d\'effort' //TODO
        },
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
    }
      var ctx = document.getElementById("barEffort");
     
      var myBarChart = new Chart(ctx, {
          type: 'bar',
          data: data2,
          options: options
      });



dataRecette = [
    {
      "Nomdelacommune": "ARZON",
      "Recettehabrapporte": 638.9982999
    },
    {
      "Nomdelacommune": "DAMGAN",
      "Recettehabrapporte": 298.6965823
    },
    {
      "Nomdelacommune": "SAINT-GILDAS-DE-RHUYS",
      "Recettehabrapporte": 268.6080723
    },
    {
      "Nomdelacommune": "PENESTIN",
      "Recettehabrapporte": 200.1918144
    },
    {
      "Nomdelacommune": "CARNAC",
      "Recettehabrapporte": 268.4230888
    },
    {
      "Nomdelacommune": "SAINT-PIERRE-QUIBERON",
      "Recettehabrapporte": 118.9316942
    },
    {
      "Nomdelacommune": "QUIBERON",
      "Recettehabrapporte": 142.9597308
    },
    {
      "Nomdelacommune": "TRINITE-SUR-MER",
      "Recettehabrapporte": 247.1608542
    },
    {
      "Nomdelacommune": "SAINT-CAST-LE-GUILDO",
      "Recettehabrapporte": 202.3087436
    },
    {
      "Nomdelacommune": "SAINT-BRIAC-SUR-MER",
      "Recettehabrapporte": 85.66302269
    },
    {
      "Nomdelacommune": "BANGOR",
      "Recettehabrapporte": -18.45378624
    },
    {
      "Nomdelacommune": "SAINT-PHILIBERT",
      "Recettehabrapporte": 142.3991334
    },
    {
      "Nomdelacommune": "SARZEAU",
      "Recettehabrapporte": 258.2224026
    },
    {
      "Nomdelacommune": "LANCIEUX",
      "Recettehabrapporte": 92.4653521
    },
    {
      "Nomdelacommune": "SAUZON",
      "Recettehabrapporte": -15.08512081
    },
    {
      "Nomdelacommune": "FREHEL",
      "Recettehabrapporte": 62.49373821
    },
    {
      "Nomdelacommune": "ERQUY",
      "Recettehabrapporte": 126.4961875
    },
    {
      "Nomdelacommune": "LOCMARIAQUER",
      "Recettehabrapporte": 167.7364233
    },
    {
      "Nomdelacommune": "SAINT-LUNAIRE",
      "Recettehabrapporte": 143.0132594
    },
    {
      "Nomdelacommune": "PLENEUF-VAL-ANDRE",
      "Recettehabrapporte": 131.6699315
    }
  ]


      datatoPrint = [];
    labelToPrint = [];
    mediane = [];
    color = [];
    colorMediane = [];
      $.each(dataRecette, function(i, value){
          datatoPrint.push((value.Recettehabrapporte + 100));
          labelToPrint.push(value.Nomdelacommune)
          color.push('rgba(0, 159, 227, 1)')
          colorMediane.push('rgba(227, 6, 19, 1)')
          mediane.push(100)
    });
  
    data2 = {
        datasets: [{
            data: datatoPrint,
            label: 'Recette de l’impôt sur le foncier bâti par habitant pour les vingts communes ou la part des résidents secondaires est la plus élevée', //TODO
            backgroundColor: color,
            borderColor:color,
            borderWidth: 1,
            order:0
        },{
          label: 'Médiane des communes bretonnes', //TODO
          data: mediane,
          borderColor: colorMediane,
          order:1,
  
          // Changes this dataset to become a line
          type: 'line'
      }],
        labels: labelToPrint,
    
        // 227 6 19
        // 0 159 227
        // 255 237 0
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        
    };
    options= {
        title: {
            display: true,
            fontSize: 20,
            text: 'Les habitants à temps plein, bénéficiaires des temps partiels' //TODO
        },
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
    }
      var ctx = document.getElementById("barRecette");
     
      var myBarChart = new Chart(ctx, {
          type: 'bar',
          data: data2,
          options: options
      });



      dataAge = [
        {
          "Nomdelacommune": "ARZON",
          "PartAge": 49.62962963
        },
        {
          "Nomdelacommune": "DAMGAN",
          "PartAge": 41.48148148
        },
        {
          "Nomdelacommune": "SAINT-GILDAS-DE-RHUYS",
          "PartAge": 39.25925926
        },
        {
          "Nomdelacommune": "PENESTIN",
          "PartAge": 57.77777778
        },
        {
          "Nomdelacommune": "CARNAC",
          "PartAge": 71.11111111
        },
        {
          "Nomdelacommune": "SAINT-PIERRE-QUIBERON",
          "PartAge": 61.48148148
        },
        {
          "Nomdelacommune": "QUIBERON",
          "PartAge": 66.66666667
        },
        {
          "Nomdelacommune": "TRINITE-SUR-MER",
          "PartAge": 71.85185185
        },
        {
          "Nomdelacommune": "SAINT-CAST-LE-GUILDO",
          "PartAge": 65.92592593
        },
        {
          "Nomdelacommune": "SAINT-BRIAC-SUR-MER",
          "PartAge": 80
        },
        {
          "Nomdelacommune": "BANGOR",
          "PartAge": 80
        },
        {
          "Nomdelacommune": "SAINT-PHILIBERT",
          "PartAge": 52.59259259
        },
        {
          "Nomdelacommune": "SARZEAU",
          "PartAge": 65.92592593
        },
        {
          "Nomdelacommune": "LANCIEUX",
          "PartAge": 63.7037037
        },
        {
          "Nomdelacommune": "SAUZON",
          "PartAge": 84.44444444
        },
        {
          "Nomdelacommune": "FREHEL",
          "PartAge": 73.33333333
        },
        {
          "Nomdelacommune": "ERQUY",
          "PartAge": 62.22222222
        },
        {
          "Nomdelacommune": "LOCMARIAQUER",
          "PartAge": 63.7037037
        },
        {
          "Nomdelacommune": "SAINT-LUNAIRE",
          "PartAge": 68.88888889
        },
        {
          "Nomdelacommune": "PLENEUF-VAL-ANDRE",
          "PartAge": 68.14814815
        }
      ]


      datatoPrint = [];
      labelToPrint = [];
      mediane = [];
      color = [];
      colorMediane = [];
        $.each(dataAge, function(i, value){
            datatoPrint.push((value.PartAge + 100));
            labelToPrint.push(value.Nomdelacommune)
            color.push('rgba(0, 159, 227, 1)')
            colorMediane.push('rgba(227, 6, 19, 1)')
            mediane.push(100)
      });
    
      data2 = {
          datasets: [{
              data: datatoPrint,
              label: 'Part des 15-29 ans pour les vingts communes ou la part des résidents secondaires est la plus élevée', //TODO
              backgroundColor: color,
              borderColor:color,
              borderWidth: 1,
              order:0
          },{
            label: 'Médiane des communes bretonnes', //TODO
            data: mediane,
            borderColor: colorMediane,
            order:1,
    
            // Changes this dataset to become a line
            type: 'line'
        }],
          labels: labelToPrint,
      
          // 227 6 19
          // 0 159 227
          // 255 237 0
      
          // These labels appear in the legend and in the tooltips when hovering different arcs
          
      };
      options= {
          title: {
              display: true,
              fontSize:20,
              text: 'Les résidences secondaires chassent les jeunes' //TODO
          },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
      }
        var ctx = document.getElementById("barAge");
       
        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: data2,
            options: options
        });

  
  