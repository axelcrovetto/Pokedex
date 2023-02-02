import requests
import json
downloadUrl = 'https://img.pokemondb.net/artwork/large/bulbasaur.jpg'

req = requests.get(downloadUrl)
filename = req.url[downloadUrl.rfind('/')+1:]

with open(filename, 'wb') as f:
    for chunk in req.iter_content(chunk_size=8192):
        if chunk:
            f.write(chunk)

def download_file(url, filename=''):
    try:
        if filename:
            pass
        else:
            filename = req.url[downloadUrl.rfind('/')+1:]

        with requests.get(url) as req:
            with open(filename, 'wb') as f:
                for chunk in req.iter_content(chunk_size=8192):
                    if chunk:
                        f.write(chunk)
            return filename
    except Exception as e:
        print("errore nel download in " + filename)
        print(e)
        return None

downloadLink = 'https://img.pokemondb.net/artwork/large/bulbasaur.jpg'


def getPokemonName(idNumber):
    res1 = requests.get('https://pokeapi.co/api/v2/pokemon/'+str(idNumber))
    data = res1.text
    parse_json = json.loads(data)
    name = parse_json['name']
    return name

def donwloadAllImages(x,y):
    for idpokemon in range(x,y):
        name = getPokemonName(idpokemon)
        downloadLinkPokemon = 'https://img.pokemondb.net/artwork/large/'+str(name)+'.jpg'
        nameLink = str(name)+'.jpg'
        download_file(downloadLinkPokemon, nameLink)
        if( idpokemon % 20 == 0):
            print("downloaded img of " + name + " number " + str(idpokemon))

""" Method to download Pokemon picture from URL """
donwloadAllImages(1,1009)
