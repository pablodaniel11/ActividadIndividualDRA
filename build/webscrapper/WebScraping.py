from bs4 import BeautifulSoup
import requests
import json

# Definimos los arrays que contendran los valoes de todas las temporadas y de cada jugador en cada fila

row = []
numJugadores = 16
limite = 0

# Escrapear temporadas desde el
for seasons in range(2016, 2020):

    temporada = {
        "temporada": seasons
    }
    requests.post('http://localhost:8082/api/temporadas', json=temporada)

    for i in range(1, 2):

        URL = 'https://basketball.realgm.com/nba/stats/' + str(seasons) + '/Advanced_Stats/Qualified/per/All/desc/' \
              + str(i) + '/Regular_Season'
        response = requests.get(URL)
        soup = BeautifulSoup(response.text, 'html.parser')

        tabla = soup.find('table', {'class': 'tablesaw', 'data-tablesaw-mode': 'swipe'})
        indis = tabla.find_all('th')
        trs = tabla.tbody.find_all('tr')

        for tr in trs:

            limite = limite + 1

            if limite >= numJugadores:
                limite = 0
                break

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

            imagen = "https://www.freepnglogos.com/uploads/nba-logo-png/nba-all-star-game-full-team-lebron-team-giannis-18.png"

            # Obtenemos la imagen del jugador o ponemos una indeterminada
            if containerImagen != None:
                imagen = containerImagen.find_all('img')[0].get('src')
                if imagen == '//ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/.png'\
                        or len(imagen) < 80:
                    imagen = "https://www.freepnglogos.com/uploads/nba-logo-png/nba-all-star-game-full-team-lebron-team-giannis-18.png"

            for indice in range(3, len(row)):
                if row[indice] == '-':
                    row[indice] = 0
                row[indice] = float(row[indice])

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

            requests.post('http://localhost:8082/api/jugadors',  json=jugador)
