const ROWS_URL = 'https://storage.googleapis.com/static-production.netcosports.com/temp/serie_a_competition.json';

export function getRows() {
    return fetch(ROWS_URL)
        .then(res => res.json())
        .then(res => rowsUtil(res))
}

function rowsUtil({ SoccerFeed: { SoccerDocument } }) {
    const TeamRecordCollection = SoccerDocument.Competition.TeamStandings.TeamRecord;

    return SoccerDocument.Team.map(team => {
        const uID = team['@attributes'].uID;

        const { Played, Won, Drawn, Lost, For, Against, Points } =
            TeamRecordCollection.find(record => record['@attributes'].TeamRef === uID).Standing;

        return { Name: team.Name, Played, Points, Won, Drawn, Lost, For, Against, GoalDiff: For - Against };
    }).sort((a, b) => b.Points - a.Points);
}
