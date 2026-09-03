# 17. Maintenance, SLA & Disaster Recovery Protocol

> **Document Code**: `CRC-DOC-17`  
> **Recovery Time Objective (RTO)**: $< 1$ Hour  
> **Recovery Point Objective (RPO)**: $< 24$ Hours  
> **Status**: APPROVED  

---

## 17.1 3-Tier Disaster Recovery (DR) Execution Runbook

### Tier 1: Supabase Instant Cloud Snapshot Restoration
- **Trigger**: Accidental deletion of a table or corrupted migration.
- **Action**: Access Supabase Management Dashboard -> Settings -> Database -> Backups -> Select snapshot -> Click "Restore".
- **Downtime**: ~5 minutes.

### Tier 2: Restoring from Off-Site Google Drive Backup (`.sql.gz`)
- **Trigger**: Loss of Supabase account, regional cloud outage, or migration to an independent VPS.
- **Procedure**:
  1. Open Google Drive folder `CRC_Website_Vault/Database_Backups/`.
  2. Download the latest dump: `crc_backup_YYYY-MM-DD.sql.gz`.
  3. Extract to raw SQL: `gunzip crc_backup_YYYY-MM-DD.sql.gz`.
  4. Restore to any fresh PostgreSQL database:
     ```bash
     psql -h <host> -U <user> -d <dbname> -f crc_backup_YYYY-MM-DD.sql
     ```
  5. Update `DATABASE_URL` in Render environment variables.
- **RTO**: 15–30 minutes.

### Tier 3: Manual On-Demand Local Dump
- SuperAdmins can download a complete live SQL dump directly from `/admin/system/backup` at any time before running critical bulk updates.
