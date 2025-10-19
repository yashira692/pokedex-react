# PokeDex Explorer

Aplicación web desarrollada en **React + Vite** que consume datos desde la **PokeAPI**  
 https://pokeapi.co/api/v2/pokemon  

Permite visualizar un listado de Pokémon con información básica y una segunda vista con más detalles.

---

##  Demo en línea
- **Sitio Deploy:** [https://pokedex-react-yashira.vercel.app/](https://pokedex-react-yashira.vercel.app/)  
- **Repositorio GitHub:** [https://github.com/yashira692/pokedex-react](https://github.com/yashira692/pokedex-react)

*(Reemplaza el enlace de deploy con el tuyo real cuando Vercel termine de construirlo.)*

---

##  Funcionalidades principales
| Funcionalidad | Descripción |
|----------------|-------------|
| Configuración inicial | Proyecto creado con Vite y React, estructura modular (componentes, rutas y estilos). |
|  Consumo de API | Conecta a la API pública de PokeAPI y obtiene datos de Pokémon. |
|  Ruta `/` (Home) | Hero con nombre del proyecto, descripción y un listado de 12 Pokémon. |
| Ruta `/entities` | Listado más detallado mostrando ID, altura y peso de cada Pokémon. |
|  Navegación | Implementada con React Router DOM. |
|  Estilos | Bootstrap + CSS personalizado. |

---

##  Tecnologías utilizadas
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Bootstrap](https://getbootstrap.com/)
- [PokeAPI](https://pokeapi.co/)

---

##  Cómo ejecutar el proyecto localmente

```bash
# 1  Clonar el repositorio
git clone https://github.com/yashira692/pokedex-react.git

# 2 Entrar a la carpeta
cd pokedex-react

# 3 Instalar dependencias
npm install

# 4 Ejecutar en modo desarrollo
npm run dev
