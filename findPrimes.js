async function findPrimes(start, end, chunkSize = 10000, batchSize = 10) {
    if (start < 2) start = 2;

    const totalNumbers = end - start + 1;
    let current = start;
    let processed = 0;
    let nextProgressMark = 10;
    const primes = [];
    const running = new Set();
    const startTime = Date.now();

    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;

        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) return false;
        }

        return true;
    }

    function processChunk(from, to) {
        return new Promise((resolve) => {
            for (let n = from; n <= to; n++) {
                if (isPrime(n)) {
                    primes.push(n);

                }

                processed++;
            }
            resolve();
        })

    }

    while (current <= end) {
        const chunkEnd = Math.min(current + chunkSize - 1, end);
        const promise = processChunk(current, chunkEnd);

        running.add(promise);
        promise.then(() => running.delete(promise));

        if (running.size >= batchSize) {
            await Promise.race(running);
        }

        const progress = (processed / totalNumbers) * 100;

        if (progress >= nextProgressMark) {
            console.log(`${nextProgressMark}% завершено`);
            nextProgressMark += 10;
        }

        current = chunkEnd + 1;
    }

    await Promise.all(running);

    const time = Date.now() - startTime;
    console.log(`Найдено простых чисел: ${primes.length}`);
    console.log(`Время выполнения: ${time} мс`);

    return primes;
}

findPrimes(1, 100000000, 1).then(() => {
    console.log("well done")
}).catch((error) => {
    console.error(`Some error occurred: ${error}`);
})