//管理者テーブル情報
export const AdminTheadInfo = [
    'No',
    '氏名',
    'ログインID',
    '権限',
    'ステータス',
    '登録日',
    '',
];

//管理者権限
export enum AdminRole {
    Admin = '0',
    Normal = '1',
}

export const AdminRoleList = [
    {
        value: AdminRole.Admin,
        text: '管理者',
    },
    {
        value: AdminRole.Normal,
        text: '一般',
    },
]

//管理者ステータス
export enum AdminStatus {
    StatusValid = '0',
    StatusInValid = '1',
}

export const AdminStatusList = [
    {
        value: AdminStatus.StatusValid,
        text: '管理者',
    },
    {
        value: AdminStatus.StatusInValid,
        text: '一般',
    },
]