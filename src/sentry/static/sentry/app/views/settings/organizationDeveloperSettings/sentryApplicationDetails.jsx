<<<<<<< HEAD
import PropTypes from 'prop-types';
import React from 'react';
import {browserHistory} from 'react-router';
=======
import {Flex, Box} from 'grid-emotion';
import PropTypes from 'prop-types';
import React from 'react';
import {browserHistory} from 'react-router';
import styled from 'react-emotion';
>>>>>>> feat(app-platform): Add UI for adding sentry apps

import {Panel, PanelBody, PanelHeader} from 'app/components/panels';
import {addErrorMessage} from 'app/actionCreators/indicator';
import {t} from 'app/locale';
import AsyncView from 'app/views/asyncView';
<<<<<<< HEAD
=======
import ConfigStore from 'app/stores/configStore';
>>>>>>> feat(app-platform): Add UI for adding sentry apps
import Form from 'app/views/settings/components/forms/form';
import FormField from 'app/views/settings/components/forms/formField';
import JsonForm from 'app/views/settings/components/forms/jsonForm';
import SettingsPageHeader from 'app/views/settings/components/settingsPageHeader';
import TextCopyInput from 'app/views/settings/components/forms/textCopyInput';
<<<<<<< HEAD
import sentryApplicationForm from 'app/data/forms/sentryApplication';
import getDynamicText from 'app/utils/getDynamicText';
=======
import sentryApplication from 'app/data/forms/sentryApplication';
import getDynamicText from 'app/utils/getDynamicText';
import Switch from 'app/components/switch';
>>>>>>> feat(app-platform): Add UI for adding sentry apps
import ApplicationScopes from './applicationScopes';

class SentryApplicationDetails extends AsyncView {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  getDefaultState() {
    return {
<<<<<<< HEAD
      ...super.getDefaultState(),
      app: null,
=======
      loading: true,
      error: false,
      app: null,
      errors: {},
>>>>>>> feat(app-platform): Add UI for adding sentry apps
    };
  }

  getEndpoints() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> use org sentry app endpoint & styling
    let {appSlug} = this.props.params;
    if (appSlug) {
      return [['app', `/sentry-apps/${appSlug}/`]];
    }
<<<<<<< HEAD
    return [];
  }

  getTitle() {
    return t('Sentry Application Details');
=======
    return [['app', `/sentry-apps/`]];
=======
    return []
>>>>>>> use org sentry app endpoint & styling
  }

  getTitle() {
    return 'Sentry Application Details';
>>>>>>> feat(app-platform): Add UI for adding sentry apps
  }

  handleScopeChange = (onChange, onBlur, scope, scopes, e) => {
    onChange(scopes, e);
    onBlur(scopes, e);
<<<<<<< HEAD
  };

  onSubmitSuccess = data => {
    const {orgId} = this.props.params;
    browserHistory.push(`/settings/${orgId}/developer-settings/`);
  };

  renderBody() {
    const {orgId} = this.props.params;
    const {app} = this.state;
    let method = app ? 'PUT' : 'POST';
    let endpoint = app ? `/sentry-apps/${app.slug}/` : '/sentry-apps/';
=======
  }

  onSubmitSuccess = (data) => {
    const {orgId} = this.props.params;
    browserHistory.push(`/settings/${orgId}/developer-settings/`);
  }

  renderBody() {
<<<<<<< HEAD
    let {orgId} = this.props.params;
>>>>>>> feat(app-platform): Add UI for adding sentry apps
=======
    const {orgId} = this.props.params;
    const {app} = this.state;
    let method = app ? "PUT" : "POST";
    let endpoint = app ? `/sentry-apps/${app.slug}/` : `/sentry-apps/`;
>>>>>>> use org sentry app endpoint & styling
    return (
      <div>
        <SettingsPageHeader title={this.getTitle()} />
        <Form
<<<<<<< HEAD
<<<<<<< HEAD
          apiMethod={method}
          apiEndpoint={endpoint}
          allowUndo
          initialData={{organization: orgId, ...app}}
          onSubmitSuccess={this.onSubmitSuccess}
          onSubmitError={err => addErrorMessage(t('Unable to save change'))}
        >
          <JsonForm location={this.props.location} forms={sentryApplicationForm} />
          <Panel>
            <PanelHeader>{t('API Scopes')}</PanelHeader>
            <PanelBody>
              <FormField
                name="scopes"
                inline={false}
                flexibleControlStateSize={true}
                getData={data => ({scopes: data})}
                required
              >
                {({onChange, onBlur}) => (
                  <ApplicationScopes
                    onToggle={this.handleScopeChange.bind(this, onChange, onBlur)}
                    scopes={app && app.scopes ? app.scopes : []}
                  />
                )}
              </FormField>
            </PanelBody>
          </Panel>
          {app && (
            <Panel>
              <PanelHeader>{t('Credentials')}</PanelHeader>
              <PanelBody>
                <FormField name="clientId" label="Client ID" overflow>
                  {({value}) => {
                    return (
                      <TextCopyInput>
                        {getDynamicText({value, fixed: 'PERCY_CLIENT_ID'})}
                      </TextCopyInput>
                    );
                  }}
                </FormField>
                <FormField overflow name="clientSecret" label="Client Secret">
=======
          apiMethod="POST"
          apiEndpoint={`/sentry-apps/`}
=======
          apiMethod={method}
          apiEndpoint={endpoint}
>>>>>>> use org sentry app endpoint & styling
          allowUndo
          initialData={{organization: orgId, ...app}}
          onSubmitSuccess={this.onSubmitSuccess}
          onSubmitError={err => addErrorMessage('Unable to save change')}
        >
          <Box>
            <JsonForm location={this.props.location} forms={sentryApplication} />
            <Panel>
              <PanelHeader>{t('API Scopes')}</PanelHeader>
              <PanelBody>
                <FormField
                  name="scopes"
                  inline={false}
                  getData={data => ({scopes: data})}
                  required
                  >
                    {({onChange, onBlur}) => (
                      <ApplicationScopes
                        onToggle={this.handleScopeChange.bind(
                          this,
                          onChange,
                          onBlur
                        )}
                        scopes={app && app.scopes ? app.scopes : []}
                      />
                    )}
                  </FormField>
              </PanelBody>
            </Panel>
<<<<<<< HEAD
            <Panel>
              <PanelHeader>{t('Credentials')}</PanelHeader>

              <PanelBody>
                <FormField name="clientID" label="Client ID" overflow>
                  {({value}) => {
                    return (
                      <div>
                        <TextCopyInput>
                          {getDynamicText({value, fixed: 'PERCY_CLIENT_ID'})}
                        </TextCopyInput>
                      </div>
                    );
                  }}
                </FormField>

                <FormField
                  overflow
                  name="clientSecret"
                  label="Client Secret"
                  help={t(`Your secret is only available briefly after application creation. Make
                  sure to save this value!`)}
                >
>>>>>>> feat(app-platform): Add UI for adding sentry apps
                  {({value}) => {
                    return value ? (
                      <TextCopyInput>
                        {getDynamicText({value, fixed: 'PERCY_CLIENT_SECRET'})}
                      </TextCopyInput>
                    ) : (
                      <em>hidden</em>
                    );
                  }}
                </FormField>
              </PanelBody>
            </Panel>
<<<<<<< HEAD
          )}
=======
=======
            {app &&
              <Panel>
                <PanelHeader>{t('Credentials')}</PanelHeader>
                <PanelBody>
                  <FormField name="clientID" label="Client ID" overflow>
                    {({value}) => {
                      return (
                        <div>
                          <TextCopyInput>
                            {getDynamicText({value, fixed: 'PERCY_CLIENT_ID'})}
                          </TextCopyInput>
                        </div>
                      );
                    }}
                  </FormField>
                  <FormField
                    overflow
                    name="clientSecret"
                    label="Client Secret"
                    help={t(`Your secret is only available briefly after application creation. Make
                      sure to save this value!`)}
                      >
                        {({value}) => {
                          return value ? (
                            <TextCopyInput>
                              {getDynamicText({value, fixed: 'PERCY_CLIENT_SECRET'})}
                            </TextCopyInput>
                          ) : (
                            <em>hidden</em>
                          );
                        }}
                      </FormField>
                    </PanelBody>
                  </Panel>
              }
>>>>>>> use org sentry app endpoint & styling
          </Box>
>>>>>>> feat(app-platform): Add UI for adding sentry apps
        </Form>
      </div>
    );
  }
}

export default SentryApplicationDetails;