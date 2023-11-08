import Build from "../../../types/build";

let builds: Build[] = [
    {
        id: "123",
        name: "Xelor modulo", 
        job: "xelor",
        author: "JeanMich", 
        items: [], 
        favorite: false, 
        votes: {
            upvotes: 10, 
            downvotes: 2, 
        },
        level: {
            start: 20,
            end: 35, 
        },
        cost: "low cost", 
        pve: false,
    },
    {
        id: "123",
        name: "TaperFor", 
        job: "iop",
        author: "BillyLaGrandeBorge", 
        items: [], 
        favorite: true, 
        votes: {
            upvotes: 50, 
            downvotes: 22, 
        },
        level: {
            start: 50,
            end: 65, 
        },
        cost: "average", 
        pve: true,
    },
    {
        id: "123",
        name: "Sa Heal fort", 
        job: "eniripsa",
        author: "Matoto", 
        items: [], 
        favorite: true, 
        votes: {
            upvotes: 101, 
            downvotes: 2, 
        },
        level: {
            start: 80,
            end: 95, 
        },
        cost: "very expensive", 
        pve: true,
    },

]

const useBuild = () => {

    const getAll = (): Promise<Build[]> => {
        return new Promise((resolve, reject) => {
            resolve(builds)
        });
    }

    const toggleFavoriteBuild = (id: string) => {
        return new Promise((resolve, reject) => {
            const build = builds.find(build => build.name === id)
            if (build) {
                build.favorite = !build.favorite
                resolve(build)
            } else {
                reject('Build not found')
            }
        });
    }

    const filterByJob = (job: string) => {
    }

    return {getAll, toggleFavoriteBuild, filterByJob}
}

export default useBuild;    