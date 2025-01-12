import { TestBed } from '@angular/core/testing';
import { PeliculasService } from './peliculas.service';

describe('PeliculasService', () => {
  let service: PeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of movies', () => {
    const peliculas = service.getPeliculas();
    expect(peliculas.length).toBeGreaterThan(0);
  });

  it('should retrieve a movie by ID', () => {
    const pelicula = service.getPelicula(0);
    expect(pelicula?.title).toBe('El padrino');
  });

  it('should return undefined for an invalid ID', () => {
    const pelicula = service.getPelicula(999);
    expect(pelicula).toBeUndefined();
  });
});
