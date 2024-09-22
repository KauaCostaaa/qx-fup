function count(vet: number[], value: number): number {
    let count = 0;
    for (let elem of vet) {
        if (elem == value) {
            count += 1      
        }
    }
    return count;
}

function sum(vet: number[]): number {
    let soma = 0;
    for (let elem of vet) {
        soma += Math.abs(elem);
    }
    return soma
}

function average(vet: number[]): number {
     return sum(vet) / vet.length;
}

function more_men(vet: number[]): string {
    let qtd_homem = 0;
    let qtd_mulher = 0;
    for (let elem of vet) {
        if (elem > 0) {
            qtd_homem += 1
        } else {
            qtd_mulher += 1
        }
    }
    if (qtd_homem > qtd_mulher) {
        return "men"
    } else if (qtd_homem < qtd_mulher) {
        return "women"
    } else {
        return "draw"
    }
}

function half_compare(vet: number[]): string {
    let half = Math.floor(vet.length / 2);
    let primeira = vet.slice(0, half);
    let segunda = vet.slice(half, vet.length);
    let stres1 = sum(primeira);
    let stres2 = sum(segunda);
    if (stres1 > stres2) {
        return "first"
    }
    if (stres1 < stres2) {
        return "second"
    }
    return "draw"
}

function sex_battle(vet: number[]): string {
    let homens = average 
}

if (require.main === module) {
}

export { count, sum, average, more_men, half_compare, sex_battle };