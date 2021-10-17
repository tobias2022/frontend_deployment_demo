function isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
}

function login(): void {
    localStorage.setItem("token", "reactRouterIsReallyHutingMeDown?");
}

function logout(): void {
    localStorage.removeItem("token");
}

export { isAuthenticated, login, logout };
