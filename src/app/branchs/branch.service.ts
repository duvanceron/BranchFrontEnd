import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { branchCreateDTO, branchDTO } from './branch';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  private apiURL = environment.apiURL+"branch";
  constructor(private http: HttpClient) {}

  public getAll(): Observable<branchDTO[]> {
    return this.http.get<branchDTO[]>(this.apiURL);
  }
  public create(branch:branchCreateDTO){
    return this.http.post<branchDTO[]>(this.apiURL,branch);
    
  }
}
