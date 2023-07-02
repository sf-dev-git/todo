import { Request, Response, NextFunction } from 'express';

export class AuthController {
    public signup(req: Request, res: Response, next: NextFunction): void {
        res.render('auth/signup', {title: 'Signup'});
    }

    public login (req: Request, res: Response, next: NextFunction): void {
        res.render('auth/login', { title: 'Login' });
    }

    public logout(req: Request, res: Response, next: NextFunction): void {
        res.redirect('/login');
    }
}
