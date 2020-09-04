from bs4 import BeautifulSoup
import requests
import json
import pandas as pd
import numpy as np
from scipy import stats
import matplotlib.pyplot as plt
import seaborn as sns
import plotly
import plotly.graph_objects as go

# Definimos los arrays que contendran los valoes de todas las temporadas y de cada jugador en cada fila

temporadas = []
row = []
datos = [[]]
indices = []

# Escrapear temporadas desde el
for seasons in range(2019, 2020):

    temporadas.append(seasons)

    for i in range(1, 2):
        URL = 'https://basketball.realgm.com/nba/stats/' + str(seasons) + '/Advanced_Stats/Qualified/per/All/desc/' \
              + str(i) + '/Regular_Season'
        response = requests.get(URL)
        soup = BeautifulSoup(response.text, 'html.parser')

        tabla = soup.find('table', {'class': 'tablesaw', 'data-tablesaw-mode': 'swipe'})
        indis = tabla.find_all('th')
        trs = tabla.tbody.find_all('tr')

        # CARGAMOS LOS INDICES
        for th in indis:
           indices.append(th.text)

        print(indices)

        for tr in trs:
            tds = tr.find_all('td')
            row = [td.text.replace('\n', '') for td in tds]

            nombre, apellido = row[1].split(' ', 1)
            nombre = nombre.replace('.', '')
            apellido = apellido.replace(' ', '_')
            apellido = apellido.replace(',', '')
            nombre_completo = nombre + " " + apellido

            URL2 = 'https://www.nba.com/players/' + nombre + '/' + apellido
            responseImg = requests.get(URL2)
            soup2 = BeautifulSoup(responseImg.text, 'html.parser')
            containerImagen = soup2.find('section', {'class': 'nba-player-header__item'})

            # Obtenemos la imagen del jugador o ponemos una indeterminada
            imagen = 'www.nba.com/.element/img/2.0/sect/statscube/players/large/default_nba_headshot_v2.png'
            if containerImagen != None:
                imagen = containerImagen.find_all('img')[0].get('src')

            for i in range(3, len(row)):
                row[i] = float(row[i])

            datos.append(row)

            jugador = {
                  "imagenjugador": imagen,
                  "temporada": seasons,
                  "nombreJugador": nombre_completo,
                  "equipo": row[2],
                  "true_shooting_p": row[3],
                  "effective_fg_p": row[4],
                  "total_shooting_p": row[5],
                  "orb_p": row[6],
                  "drb_p": row[7],
                  "trb_p": row[8],
                  "ast_p": row[10],
                  "tov_p": row[11],
                  "stl_p": row[12],
                  "blk_p": row[13],
                  "usg_p": row[14],
                  "ppr": row[15],
                  "pps": row[16],
                  "ortg": row[17],
                  "drtg": row[18],
                  "ediff": row[19],
                  "fic": row[20]
            }
            print(jugador)

            print(seasons)
            #requests.post('http://localhost:8081/api/jugadors',  json=jugador)
            #requests.post('http://localhost:8081/api/jugadors', json=temporada)

    #data = pd.DataFrame(datos, columns=indices)
    #data.hist()
    #plt.show()
    #corr = data.corr()
    #sns.heatmap(corr, annot=True, vmin=-1, vmax=1, center=0)
    #plt.show()

    # PONER VELAS DE VARIABLES (Buscar en web seaborn)
