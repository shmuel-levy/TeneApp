import React, { useState, useEffect } from 'react';
import {
  AdminContainer,
  AdminHeader,
  AdminTitle,
  SubmissionsList,
  SubmissionCard,
  SubmissionHeader,
  SubmissionInfo,
  SubmissionDetails,
  Label,
  Value,
  Timestamp,
  ClearButton,
  ExportButton,
  ButtonContainer,
  NoSubmissions
} from './Admin.elements';

const Admin = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = () => {
    const stored = localStorage.getItem('teneSubmissions');
    if (stored) {
      setSubmissions(JSON.parse(stored));
    }
  };

  const clearSubmissions = () => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק את כל ההגשות?')) {
      localStorage.removeItem('teneSubmissions');
      setSubmissions([]);
    }
  };

  const exportToCSV = () => {
    if (submissions.length === 0) {
      alert('אין הגשות לייצוא');
      return;
    }

    const headers = ['תאריך', 'שם', 'אימייל', 'טלפון', 'סוג משתמש', 'שם החווה', 'מיקום', 'הודעה'];
    const csvContent = [
      headers.join(','),
      ...submissions.map(sub => [
        new Date(sub.timestamp).toLocaleString('he-IL'),
        sub.name,
        sub.email,
        sub.phone,
        sub.userType === 'farmer' ? 'חקלאי' : 'צרכן',
        sub.farmName || '',
        sub.location,
        sub.message || ''
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `tene-submissions-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AdminContainer>
      <AdminHeader>
        <AdminTitle>ניהול הגשות טופס</AdminTitle>
        <ButtonContainer>
          <ExportButton onClick={exportToCSV}>
            ייצא ל-CSV
          </ExportButton>
          <ClearButton onClick={clearSubmissions}>
            מחק הכל
          </ClearButton>
        </ButtonContainer>
      </AdminHeader>

      {submissions.length === 0 ? (
        <NoSubmissions>אין הגשות עדיין</NoSubmissions>
      ) : (
        <SubmissionsList>
          {submissions.map((submission, index) => (
            <SubmissionCard key={submission.id || index}>
              <SubmissionHeader>
                <h3>{submission.name}</h3>
                <Timestamp>
                  {new Date(submission.timestamp).toLocaleString('he-IL')}
                </Timestamp>
              </SubmissionHeader>
              
              <SubmissionInfo>
                <SubmissionDetails>
                  <Label>אימייל:</Label>
                  <Value>{submission.email}</Value>
                </SubmissionDetails>
                
                <SubmissionDetails>
                  <Label>טלפון:</Label>
                  <Value>{submission.phone}</Value>
                </SubmissionDetails>
                
                <SubmissionDetails>
                  <Label>סוג משתמש:</Label>
                  <Value>{submission.userType === 'farmer' ? 'חקלאי' : 'צרכן'}</Value>
                </SubmissionDetails>
                
                {submission.farmName && (
                  <SubmissionDetails>
                    <Label>שם החווה:</Label>
                    <Value>{submission.farmName}</Value>
                  </SubmissionDetails>
                )}
                
                <SubmissionDetails>
                  <Label>מיקום:</Label>
                  <Value>{submission.location}</Value>
                </SubmissionDetails>
                
                {submission.message && (
                  <SubmissionDetails>
                    <Label>הודעה:</Label>
                    <Value>{submission.message}</Value>
                  </SubmissionDetails>
                )}
              </SubmissionInfo>
            </SubmissionCard>
          ))}
        </SubmissionsList>
      )}
    </AdminContainer>
  );
};

export default Admin;
