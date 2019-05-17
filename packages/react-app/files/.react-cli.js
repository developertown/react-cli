'use strict';


module.exports = {
  blueprintVersion: '<%= blueprintVersion %>',
  features: {
    <% if (testing) { %>testing: true,<% } %>
    <% if (jsonapi) { %>jsonapi: true,<% } %>
    <% if (auth0) { %>auth0: true,<% } %>
    <% if (i18n) { %>i18n: true,<% } %>
    <% if (redux) { %>redux: true,<% } %>
  },
  styles: {
    <% if (materialUi) { %>materialUi: true,<% } %>
    <% if (sass) { %>sass: true,<% } %>
  },
}
