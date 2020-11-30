import { IPstTableConfig } from 'app/shared/interfaces/pst-table-config.interface';

export const POST_TABLE_CONFIG: IPstTableConfig = {
    columns: [{
        columnDef: 'subreddit',
        columnName: 'Subreddit Name',
        key: 'subreddit'
    }, {
        columnDef: 'title',
        columnName: 'Title',
        key: 'title'
    }, {
        columnDef: 'ups',
        columnName: 'Upvotes',
        key: 'ups'
    }, {
        columnDef: 'downs',
        columnName: 'Downvotes',
        key: 'downs'
    }],
    displayedColumns: ['subreddit', 'title', 'ups', 'downs']
};
