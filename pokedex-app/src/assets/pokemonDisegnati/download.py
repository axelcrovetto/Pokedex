import requests
import json

def download_file(url, filename='',req=''):
    try:
        if filename:
            pass            
        else:
            filename = req.url[url.rfind('/')+1:]
        with requests.get(url) as req:
            if req.status_code !=404:
                with open(filename, 'wb') as f:
                    for chunk in req.iter_content(chunk_size=8192):
                        if chunk:
                            f.write(chunk)
                return filename
            else:
                print("\n Errore nel download in " + filename)
    except Exception as e:
        print("errore nel download in " + filename)
        print(e)
        return None



def getPokemonName(idNumber):
    res1 = requests.get('https://pokeapi.co/api/v2/pokemon/'+str(idNumber))
    data = res1.text
    parse_json = json.loads(data)
    name = parse_json['name']
    return name

def donwloadAllImages(x,y):
    for idpokemon in range(x,y):
        name = getPokemonName(idpokemon)
        downloadLinkPokemon = 'https://img.pokemondb.net/artwork/vector/large/'+str(name)+'.png'
        req = requests.get(downloadLinkPokemon)
        filename = req.url[downloadLinkPokemon.rfind('/')+1:]
        nameLink = str(name)+'.png'
        download_file(downloadLinkPokemon, nameLink,req)
        if( idpokemon % 20 == 0):
            print("downloaded img of " + name + " number " + str(idpokemon))
    

donwloadAllImages(1,650)