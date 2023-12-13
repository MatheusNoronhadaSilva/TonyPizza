var API = {
    pizzaria: 'Tony Pizzaria',
    categorias: [
        {
          id: 1,
          nome: "Pizzas",
          imagem: "../img/Vector.png"
        },
        {
          id: 2,
          nome: "Bebidas",
          imagem: "../img/Kawaii Soda.png"
        },
        {
          id: 3,
          nome: "Frutas",
          imagem: "../img/Watermelon.png"
        },
        {
          id: 4,
          nome: "Pizzas",
          imagem: "../img/Pizza.png"
        },
        {
          id: 5,
          nome: "Sundaes",
          imagem: "../img/Ice Cream Sundae.png"
        },
        {
          id: 6,
          nome: "Sorvetes",
          imagem: "../img/Kawaii Ice Cream.png"
        }
      ],
    favoritas: [
      {
        id: '1',
        nomePizza: 'Pizza de calabresa com queijo',
        preco: 'R$ 16,00',
        imagem: '../img/Rectangle 6.png',
        descricao: 'Uma clássica combinação de calabresa suculenta e queijo derretido, perfeita para os amantes de sabores tradicionais.',
        comentarios: [
          {
           id: '1',
           usuario: "Maria da Silva",
           titulo_comentário: "Pizza muito boa!",
           imagem: "https://lh3.googleusercontent.com/fife/AGXqzDk1i8OGGigjEry9_mQLfsli6rrEfCtZa2ENbtkplOajTMQw-T1e2D-5M9qN2VClXoGRwb42orwKWNgkOLIjrM8mV59v0lfxrQZbhZx-Nj6lRHjUgX-aDCfuoAu2G0Fvm8rjl7SHS6vojfULo4MQpZ8VEYI_DCYSbKzVC1MUZZbuYrWCbhAgpCPboz-qusm3Wp8zEKE5y6fuZr3TbZBfMO4E_XxO8P8tHexIAZKIY119QaTsJAeLB04RxhZcxdgB2HL2VG479gqK-McOexjMA91hxAVTMwpWXycrd_FdxwfobRxFZzfi4d-mRHXaL80BtWVRbFkRRSqG67T76jJz_Du_cR1fAXRR59reTLhO99Cv91HFoDMWNkUlX3Lmvg3D7-rA9gZl7oZ-BZ_Uuo6tu3xC-EYsc6Q_-cruC_H6_PoWuHfXgAbSfUcPp_DdqeYH9HyKT7s7OqAkPEnjOQRt4SB8WPZ33steoakjMGYfT1z7VqSafcmq-qy_eybnNIXI3RpmSGU8O-NvHjJtL9Ql5AUV-150LLBt7H1-h5cFv7s0M4snpkUskthKikPCPKaLjX4Hyo2JLdYyCYSWPYQIXURzkl8LIyLuKKzjYzjSfILrq2fNtIv5EWgz6R3gYwIBxja4T4sm-_q2ICQuI5L4Nqmxnq4iV6ULhLIuGt1aS_NHFQvZcylaZ4DnI2gGDSq-IhRRRCXe6_EatbP7UKZ2bLf8DCnYuqwcAN_EI-7J5xq4eFkxs-dw-g-z1Qm-ERrRWfYW5oZ0ILej4Cr20t--_rOkRpzZGLUyrhKgsk7zyFmT0Pd3ERBDouOka8-pEN6DgRrrPCWnSCS3uiNih-dXG4EVeZwIgEDHHhO-OGnTPIWsQ6Na1TntHFscvrWUYd99WfgfIMLTEWId1rTOiNT2IrkalLxzkReVISkzG6VdZjND_8855j_jnmme7UQi11MtnAV4K2F5xRensEK8TXU6fUcJt7lge3J8zVEu-1fVoOdyx3RnULoCh1SgkX9MYaKrxb5ptnL1J7tR0DrwRCKgC2-6XwUnBP5lO7XFDvnRyg-cy9ysHl66qRmSr2g2QFShN5RFMvgNIo8sTNkkRgatpnzZ_bGgjesTuoK-gycIaVEX1x2IJqkPL83VgchmkbOlCHsH_dUfLAMdqYASFI4rKzW4WuM1lMxFpWGMcbKUa51J1DT7zccVR5_wYSsPjvhq_DsUjnR1zbex2Qy_2_jvLML45D51MhA2qQ5w3ZuDMDcZvOnmHv5am2qg6olKyioFPhVJGN1EISJ6AyRVI4XIBT9bZnj0yg_Jciwdf8G_UCxdL_Jf9rljEtb6_h4NTdxkPJTz_9MnUyL4fYRqWKixlUg5_4Y54J10wmXWJ2lAxUaziK48OAgSBzaExeWUt36Hvd-ehobstIVZgAbe8uoA79QxQbrquUEASJiSaWjPepR-H_brhfPdO7S_WDXL6bME-AZexAJhhqNoo0VIwPru6Tsv7dO3f2l4ylBK7ltWnmvvQosVHLC6QItyCircSH6QuBAQ_ny6BulG6YdIv40eYd9ZzmRkgpzxAzViCfiE1xCESeFD4L5TLPBFA28FHDfaORVrBNHaxcQF8xvgADgHcRKXuZUk3LMWgbcGND6J_FhpjOAEB9_ZTl7U3yhpGn8eAANAq-9h=s154-w154-h104-s-no-gm?authuser=0",
           data: "15/03/2022",
           comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          },
          {
            id: '2',
            usuario: "Pedro Gomes Dias",
            titulo_comentario: "Essa pizza é demais, recomendo",
            imagem: "../img/Ellipse 8.png",
            data: "21/05/2022",
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          }
        ]
      },
      {
        id: '2',
        nomePizza: 'Pizza de peperonni com queijo',
        preco: 'R$ 19,00',
        imagem: '../img/Rectangle 14.png',
        description: 'Delicie-se com a intensidade do peperonni combinada com a cremosidade do queijo, uma explosão de sabor em cada mordida.',
        comentarios: [
          {
           id: '1',
           usuario: "Maria da Silva",
           titulo_comentário: "Pizza muito boa!",
           imagem: "https://lh3.googleusercontent.com/fife/AGXqzDk1i8OGGigjEry9_mQLfsli6rrEfCtZa2ENbtkplOajTMQw-T1e2D-5M9qN2VClXoGRwb42orwKWNgkOLIjrM8mV59v0lfxrQZbhZx-Nj6lRHjUgX-aDCfuoAu2G0Fvm8rjl7SHS6vojfULo4MQpZ8VEYI_DCYSbKzVC1MUZZbuYrWCbhAgpCPboz-qusm3Wp8zEKE5y6fuZr3TbZBfMO4E_XxO8P8tHexIAZKIY119QaTsJAeLB04RxhZcxdgB2HL2VG479gqK-McOexjMA91hxAVTMwpWXycrd_FdxwfobRxFZzfi4d-mRHXaL80BtWVRbFkRRSqG67T76jJz_Du_cR1fAXRR59reTLhO99Cv91HFoDMWNkUlX3Lmvg3D7-rA9gZl7oZ-BZ_Uuo6tu3xC-EYsc6Q_-cruC_H6_PoWuHfXgAbSfUcPp_DdqeYH9HyKT7s7OqAkPEnjOQRt4SB8WPZ33steoakjMGYfT1z7VqSafcmq-qy_eybnNIXI3RpmSGU8O-NvHjJtL9Ql5AUV-150LLBt7H1-h5cFv7s0M4snpkUskthKikPCPKaLjX4Hyo2JLdYyCYSWPYQIXURzkl8LIyLuKKzjYzjSfILrq2fNtIv5EWgz6R3gYwIBxja4T4sm-_q2ICQuI5L4Nqmxnq4iV6ULhLIuGt1aS_NHFQvZcylaZ4DnI2gGDSq-IhRRRCXe6_EatbP7UKZ2bLf8DCnYuqwcAN_EI-7J5xq4eFkxs-dw-g-z1Qm-ERrRWfYW5oZ0ILej4Cr20t--_rOkRpzZGLUyrhKgsk7zyFmT0Pd3ERBDouOka8-pEN6DgRrrPCWnSCS3uiNih-dXG4EVeZwIgEDHHhO-OGnTPIWsQ6Na1TntHFscvrWUYd99WfgfIMLTEWId1rTOiNT2IrkalLxzkReVISkzG6VdZjND_8855j_jnmme7UQi11MtnAV4K2F5xRensEK8TXU6fUcJt7lge3J8zVEu-1fVoOdyx3RnULoCh1SgkX9MYaKrxb5ptnL1J7tR0DrwRCKgC2-6XwUnBP5lO7XFDvnRyg-cy9ysHl66qRmSr2g2QFShN5RFMvgNIo8sTNkkRgatpnzZ_bGgjesTuoK-gycIaVEX1x2IJqkPL83VgchmkbOlCHsH_dUfLAMdqYASFI4rKzW4WuM1lMxFpWGMcbKUa51J1DT7zccVR5_wYSsPjvhq_DsUjnR1zbex2Qy_2_jvLML45D51MhA2qQ5w3ZuDMDcZvOnmHv5am2qg6olKyioFPhVJGN1EISJ6AyRVI4XIBT9bZnj0yg_Jciwdf8G_UCxdL_Jf9rljEtb6_h4NTdxkPJTz_9MnUyL4fYRqWKixlUg5_4Y54J10wmXWJ2lAxUaziK48OAgSBzaExeWUt36Hvd-ehobstIVZgAbe8uoA79QxQbrquUEASJiSaWjPepR-H_brhfPdO7S_WDXL6bME-AZexAJhhqNoo0VIwPru6Tsv7dO3f2l4ylBK7ltWnmvvQosVHLC6QItyCircSH6QuBAQ_ny6BulG6YdIv40eYd9ZzmRkgpzxAzViCfiE1xCESeFD4L5TLPBFA28FHDfaORVrBNHaxcQF8xvgADgHcRKXuZUk3LMWgbcGND6J_FhpjOAEB9_ZTl7U3yhpGn8eAANAq-9h=s154-w154-h104-s-no-gm?authuser=0",
           data: "15/03/2022",
           comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          },
          {
            id: '2',
            usuario: "Pedro Gomes Dias",
            titulo_comentario: "Essa pizza é demais, recomendo",
            imagem: "../img/Ellipse 8.png",
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          }
        ]
      },
      {
        id: '3',
        nomePizza: 'Pizza de calabresa com queijo',
        preco: 'R$ 16,00',
        imagem: '../img/Rectangle 6.png',
        descricao: 'Uma opção irresistível que une a suavidade do frango ao sabor marcante do catupiry, proporcionando uma experiência única.',
        comentarios: [
          {
           id: '1',
           usuario: "Maria da Silva",
           titulo_comentário: "Pizza muito boa!",
           imagem: "https://lh3.googleusercontent.com/fife/AGXqzDk1i8OGGigjEry9_mQLfsli6rrEfCtZa2ENbtkplOajTMQw-T1e2D-5M9qN2VClXoGRwb42orwKWNgkOLIjrM8mV59v0lfxrQZbhZx-Nj6lRHjUgX-aDCfuoAu2G0Fvm8rjl7SHS6vojfULo4MQpZ8VEYI_DCYSbKzVC1MUZZbuYrWCbhAgpCPboz-qusm3Wp8zEKE5y6fuZr3TbZBfMO4E_XxO8P8tHexIAZKIY119QaTsJAeLB04RxhZcxdgB2HL2VG479gqK-McOexjMA91hxAVTMwpWXycrd_FdxwfobRxFZzfi4d-mRHXaL80BtWVRbFkRRSqG67T76jJz_Du_cR1fAXRR59reTLhO99Cv91HFoDMWNkUlX3Lmvg3D7-rA9gZl7oZ-BZ_Uuo6tu3xC-EYsc6Q_-cruC_H6_PoWuHfXgAbSfUcPp_DdqeYH9HyKT7s7OqAkPEnjOQRt4SB8WPZ33steoakjMGYfT1z7VqSafcmq-qy_eybnNIXI3RpmSGU8O-NvHjJtL9Ql5AUV-150LLBt7H1-h5cFv7s0M4snpkUskthKikPCPKaLjX4Hyo2JLdYyCYSWPYQIXURzkl8LIyLuKKzjYzjSfILrq2fNtIv5EWgz6R3gYwIBxja4T4sm-_q2ICQuI5L4Nqmxnq4iV6ULhLIuGt1aS_NHFQvZcylaZ4DnI2gGDSq-IhRRRCXe6_EatbP7UKZ2bLf8DCnYuqwcAN_EI-7J5xq4eFkxs-dw-g-z1Qm-ERrRWfYW5oZ0ILej4Cr20t--_rOkRpzZGLUyrhKgsk7zyFmT0Pd3ERBDouOka8-pEN6DgRrrPCWnSCS3uiNih-dXG4EVeZwIgEDHHhO-OGnTPIWsQ6Na1TntHFscvrWUYd99WfgfIMLTEWId1rTOiNT2IrkalLxzkReVISkzG6VdZjND_8855j_jnmme7UQi11MtnAV4K2F5xRensEK8TXU6fUcJt7lge3J8zVEu-1fVoOdyx3RnULoCh1SgkX9MYaKrxb5ptnL1J7tR0DrwRCKgC2-6XwUnBP5lO7XFDvnRyg-cy9ysHl66qRmSr2g2QFShN5RFMvgNIo8sTNkkRgatpnzZ_bGgjesTuoK-gycIaVEX1x2IJqkPL83VgchmkbOlCHsH_dUfLAMdqYASFI4rKzW4WuM1lMxFpWGMcbKUa51J1DT7zccVR5_wYSsPjvhq_DsUjnR1zbex2Qy_2_jvLML45D51MhA2qQ5w3ZuDMDcZvOnmHv5am2qg6olKyioFPhVJGN1EISJ6AyRVI4XIBT9bZnj0yg_Jciwdf8G_UCxdL_Jf9rljEtb6_h4NTdxkPJTz_9MnUyL4fYRqWKixlUg5_4Y54J10wmXWJ2lAxUaziK48OAgSBzaExeWUt36Hvd-ehobstIVZgAbe8uoA79QxQbrquUEASJiSaWjPepR-H_brhfPdO7S_WDXL6bME-AZexAJhhqNoo0VIwPru6Tsv7dO3f2l4ylBK7ltWnmvvQosVHLC6QItyCircSH6QuBAQ_ny6BulG6YdIv40eYd9ZzmRkgpzxAzViCfiE1xCESeFD4L5TLPBFA28FHDfaORVrBNHaxcQF8xvgADgHcRKXuZUk3LMWgbcGND6J_FhpjOAEB9_ZTl7U3yhpGn8eAANAq-9h=s154-w154-h104-s-no-gm?authuser=0",
           data: "15/03/2022",
           comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          },
          {
            id: '2',
            usuario: "Pedro Gomes Dias",
            titulo_comentario: "Essa pizza é demais, recomendo",
            imagem: "../img/Ellipse 8.png",
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          }
        ]
      },
      {
        id: '4',
        nomePizza: 'Pizza de peperonni com queijo',
        preco: 'R$ 19,00',
        imagem: '../img/Rectangle 14.png',
        descricao: 'Delicie-se com a intensidade do peperonni combinada com a cremosidade do queijo, uma explosão de sabor em cada mordida.',
        comentarios: [
          {
           id: '1',
           usuario: "Maria da Silva",
           titulo_comentário: "Pizza muito boa!",
           imagem: "https://lh3.googleusercontent.com/pw/ABLVV85ADlBXHrYGhdLBB1YQfUfj2oJGM_z1bsfSTRTx60tgC6qSd7XB_W3bF2AG0yjGp3rsjH21WwM1c1EzQgPWgH04CwwcvxuG5dM7HBIz6dXarztIaW2MZm--8RO85QUD0eHPgf8pe2HbRvkm2XtCmPK_=w76-h83-s-no-gm?authuser=0",
           data: "15/03/2022",
           comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          },
          {
            id: '2',
            usuario: "Pedro Gomes Dias",
            titulo_comentario: "Essa pizza é demais, recomendo",
            imagem: "../img/Ellipse 8.png",
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          }
        ]
      },
      {
        id: '5',
        nomePizza: 'Pizza de peperonni com queijo',
        preco: 'R$ 19,00',
        imagem: '../img/Rectangle 14.png',
        description: 'Delicie-se com a intensidade do peperonni combinada com a cremosidade do queijo, uma explosão de sabor em cada mordida.',
        comentarios: [
          {
           id: '1',
           usuario: "Maria da Silva",
           titulo_comentário: "Pizza muito boa!",
           imagem: "https://lh3.googleusercontent.com/pw/ABLVV85ADlBXHrYGhdLBB1YQfUfj2oJGM_z1bsfSTRTx60tgC6qSd7XB_W3bF2AG0yjGp3rsjH21WwM1c1EzQgPWgH04CwwcvxuG5dM7HBIz6dXarztIaW2MZm--8RO85QUD0eHPgf8pe2HbRvkm2XtCmPK_=w76-h83-s-no-gm?authuser=0",
           data: "15/03/2022",
           comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          },
          {
            id: '2',
            usuario: "Pedro Gomes Dias",
            titulo_comentario: "Essa pizza é demais, recomendo",
            imagem: "../img/Ellipse 8.png",
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          }
        ]
      },
      {
        id: '6',
        nomePizza: 'Pizza de calabresa com queijo',
        preco: 'R$ 16,00',
        imagem: '../img/Rectangle 6.png',
        descricao: 'Uma opção irresistível que une a suavidade do frango ao sabor marcante do catupiry, proporcionando uma experiência única.',
        comentarios: [
          {
           id: '1',
           usuario: "Maria da Silva",
           titulo_comentário: "Pizza muito boa!",
           imagem: "https://lh3.googleusercontent.com/pw/ABLVV85ADlBXHrYGhdLBB1YQfUfj2oJGM_z1bsfSTRTx60tgC6qSd7XB_W3bF2AG0yjGp3rsjH21WwM1c1EzQgPWgH04CwwcvxuG5dM7HBIz6dXarztIaW2MZm--8RO85QUD0eHPgf8pe2HbRvkm2XtCmPK_=w76-h83-s-no-gm?authuser=0",
           data: "15/03/2022",
           comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          },
          {
            id: '2',
            usuario: "Pedro Gomes Dias",
            titulo_comentario: "Essa pizza é demais, recomendo",
            imagem: "../img/Ellipse 8.png",
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          }
        ]
      },
    ],
    Recomendados: [
        {
          id: '1',
          nomePizza: 'Pizza de peperoni com queijo e tomate',
          preco: 'R$14,00',
          imagem:'../img/Rectangle 16.png',
          descricao: 'Uma variação da clássica peperonni, com a adição refrescante de tomates. Uma combinação equilibrada de sabores.',
          comentarios: [
            {
             id: '1',
             usuario: "Maria da Silva",
             titulo_comentário: "Pizza muito boa!",
             imagem: "https://lh3.googleusercontent.com/pw/ABLVV85ADlBXHrYGhdLBB1YQfUfj2oJGM_z1bsfSTRTx60tgC6qSd7XB_W3bF2AG0yjGp3rsjH21WwM1c1EzQgPWgH04CwwcvxuG5dM7HBIz6dXarztIaW2MZm--8RO85QUD0eHPgf8pe2HbRvkm2XtCmPK_=w76-h83-s-no-gm?authuser=0",
             data: "15/03/2022",
             comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            },
            {
              id: '2',
              usuario: "Pedro Gomes Dias",
              titulo_comentario: "Essa pizza é demais, recomendo",
              imagem: "../img/Ellipse 8.png",
              comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            }
          ]
        },
        {
          id: '2',
          nomePizza: 'Pizza brotinho com queijo e tomate',
          preco: 'R$12,00',
          imagem:'../img/Rectangle 17 (1).png',
          descricao: 'Uma opção mais leve e perfeita para uma refeição individual, com a clássica combinação de queijo e tomate.',
          comentarios: [
            {
             id: '1',
             usuario: "Maria da Silva",
             titulo_comentário: "Pizza muito boa!",
             imagem: "https://lh3.googleusercontent.com/pw/ABLVV85ADlBXHrYGhdLBB1YQfUfj2oJGM_z1bsfSTRTx60tgC6qSd7XB_W3bF2AG0yjGp3rsjH21WwM1c1EzQgPWgH04CwwcvxuG5dM7HBIz6dXarztIaW2MZm--8RO85QUD0eHPgf8pe2HbRvkm2XtCmPK_=w76-h83-s-no-gm?authuser=0",
             data: "15/03/2022",
             comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            },
            {
              id: '2',
              usuario: "Pedro Gomes Dias",
              titulo_comentario: "Essa pizza é demais, recomendo",
              imagem: "../img/Ellipse 8.png",
              comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            }
          ]
        },
        {
          id: '3',
          nomePizza: 'Pizza de peperoni com queijo e tomate',
          preco: 'R$14,00',
          imagem:'../img/Rectangle 16.png',
          descricao: 'Uma variação da clássica peperonni, com a adição refrescante de tomates. Uma combinação equilibrada de sabores.',
          comentarios: [
            {
             id: '1',
             usuario: "Maria da Silva",
             titulo_comentário: "Pizza muito boa!",
             imagem: "https://lh3.googleusercontent.com/pw/ABLVV85ADlBXHrYGhdLBB1YQfUfj2oJGM_z1bsfSTRTx60tgC6qSd7XB_W3bF2AG0yjGp3rsjH21WwM1c1EzQgPWgH04CwwcvxuG5dM7HBIz6dXarztIaW2MZm--8RO85QUD0eHPgf8pe2HbRvkm2XtCmPK_=w76-h83-s-no-gm?authuser=0",
             data: "15/03/2022",
             comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            },
            {
              id: '2',
              usuario: "Pedro Gomes Dias",
              titulo_comentario: "Essa pizza é demais, recomendo",
              imagem: "../img/Ellipse 8.png",
              comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            }
          ]
        },
        {
          id: '4',
          nomePizza: 'Pizza brotinho com queijo e tomate',
          preco: 'R$12,00',
          imagem:'../img/Rectangle 17 (1).png',
          descricao: 'Uma opção mais leve e perfeita para uma refeição individual, com a clássica combinação de queijo e tomate.',
          comentarios: [
            {
             id: '1',
             usuario: "Maria da Silva",
             titulo_comentário: "Pizza muito boa!",
             imagem: "https://lh3.googleusercontent.com/pw/ABLVV85ADlBXHrYGhdLBB1YQfUfj2oJGM_z1bsfSTRTx60tgC6qSd7XB_W3bF2AG0yjGp3rsjH21WwM1c1EzQgPWgH04CwwcvxuG5dM7HBIz6dXarztIaW2MZm--8RO85QUD0eHPgf8pe2HbRvkm2XtCmPK_=w76-h83-s-no-gm?authuser=0",
             data: "15/03/2022",
             comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            },
            {
              id: '2',
              usuario: "Pedro Gomes Dias",
              titulo_comentario: "Essa pizza é demais, recomendo",
              imagem: "../img/Ellipse 8.png",
              comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            }
          ]
        },
        {
          id: '5',
          nomePizza: 'Pizza de peperoni com queijo e tomate',
          preco: 'R$14,00',
          imagem:'../img/Rectangle 16.png',
          descricao: 'Uma variação da clássica peperonni, com a adição refrescante de tomates. Uma combinação equilibrada de sabores.',
          comentarios: [
            {
             id: '1',
             usuario: "Maria da Silva",
             titulo_comentário: "Pizza muito boa!",
             imagem: "https://lh3.googleusercontent.com/pw/ABLVV85ADlBXHrYGhdLBB1YQfUfj2oJGM_z1bsfSTRTx60tgC6qSd7XB_W3bF2AG0yjGp3rsjH21WwM1c1EzQgPWgH04CwwcvxuG5dM7HBIz6dXarztIaW2MZm--8RO85QUD0eHPgf8pe2HbRvkm2XtCmPK_=w76-h83-s-no-gm?authuser=0",
             data: "15/03/2022",
             comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            },
            {
              id: '2',
              usuario: "Pedro Gomes Dias",
              titulo_comentario: "Essa pizza é demais, recomendo",
              imagem: "../img/Ellipse 8.png",
              comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            }
          ]
        },
    ],
    bebidas: [
        {
          id: '1',
          nomeBebida: 'Coca-cola 2L',
          preco: 'R$ 14,99',
          descricao: 'Refrigerante Garrafa 2L \n Embalagem Econômica',
          imagem: '../img/Rectangle 29.png'
        },
        {
          id: '2',
          nomeBebida: 'Cerveja Heineken',
          preco: 'R$ 17,99',
          descricao: 'Refrigerante Garrafa 2L \n Embalagem Econômica',
          imagem: '../img/Rectangle 31.png'
        },
        {
          id: '3',
          nomeBebida: 'Coca-cola 2L',
          preco: 'R$ 14,99',
          descricao: 'Refrigerante Garrafa 2L \n Embalagem Econômica',
          imagem: '../img/Rectangle 29.png'
        },
        {
          id: '4',
          nomeBebida: 'Cerveja Heineken',
          preco: 'R$ 17,99',
          descricao: 'Refrigerante Garrafa 2L \n Embalagem Econômica',
          imagem: '../img/Rectangle 31.png'
        },
        {
          id: '5',
          nomeBebida: 'Cerveja Heineken',
          preco: 'R$ 17,99',
          descricao: 'Refrigerante Garrafa 2L \n Embalagem Econômica',
          imagem: '../img/Rectangle 31.png'
        },
    ],
    cadastros: [
      {
        id: "1",
        userName: "Maria da Silva",
        email: "maria.silva@gmail.com",
        pass: "123456",
        confirmPass: "123456",
        telefone: "11999999999",
        localizacao: {
          cidade: "São Paulo",
          estado: "SP",
          rua: "Rua A",
          logradouro: "Bairro X",
          numeroCasa: "123",
          pais: "Brasil"
        }
      },
      {
        id: "2",
        userName: "Pedro Gomes Dias",
        email: "pedro.dias@hotmail.com",
        pass: "654321",
        confirmPass: "654321",
        telefone: "11888888888",
        localizacao: {
          cidade: "Rio de Janeiro",
          estado: "RJ",
          rua: "Avenida B",
          logradouro: "Bairro Y",
          numeroCasa: "456",
          pais: "Brasil"
        }
      },
      {
        id: "3",
        userName: "Fulano da Silva",
        email: "fulano@hotmail.com",
        pass: "654321",
        confirmPass: "654321",
        telefone: "11888888888",
        localizacao: {
          cidade: "Rio de Janeiro",
          estado: "RJ",
          rua: "Avenida B",
          logradouro: "Bairro Y",
          numeroCasa: "456",
          pais: "Brasil"
        }
      },
  ],
}

module.exports = {
  API
}